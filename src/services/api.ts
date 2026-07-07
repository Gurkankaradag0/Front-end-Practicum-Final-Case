import axios from 'axios'
import { manipulate, pageFromUrl } from '~/utils/api'
import { API_RESOURCES, CATEGORIES } from '~/utils/categories'
import type { Category, Entity, SearchPage, SearchResults, SwapiEntity, SwapiPage } from '~/types'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    timeout: 15000
})

/** In-memory cache so revisited detail pages don't refetch. */
const detailCache = new Map<string, Entity>()

export const getDetail = async (category: Category, id: number): Promise<Entity | null> => {
    const cacheKey = `${category}/${id}`
    const cached = detailCache.get(cacheKey)
    if (cached) return cached

    try {
        const { data } = await api.get<SwapiEntity>(`/${API_RESOURCES[category]}/${id}/`)
        const entity = manipulate(data, category)
        detailCache.set(cacheKey, entity)
        return entity
    } catch {
        return null
    }
}

export interface CategoryPageResult {
    results: Entity[]
    nextPage: number | null
    hasMore: boolean
}

export const getCategoryPage = async (category: Category, page = 1): Promise<CategoryPageResult | null> => {
    try {
        const { data } = await api.get<SwapiPage>(`/${API_RESOURCES[category]}/`, { params: { page } })
        const results = data.results.map(item => manipulate(item, category)).filter(entity => entity.name !== 'unknown')
        return {
            results,
            nextPage: pageFromUrl(data.next),
            hasMore: data.next !== null
        }
    } catch {
        return null
    }
}

export const searchCategory = async (query: string, category: Category, page = 1): Promise<SearchPage | null> => {
    try {
        const { data } = await api.get<SwapiPage>(`/${API_RESOURCES[category]}/`, { params: { search: query, page } })
        return {
            count: data.count,
            nextPage: pageFromUrl(data.next),
            results: data.results.map(item => manipulate(item, category))
        }
    } catch {
        return null
    }
}

/** Searches every category in parallel; categories that fail or have no hits are omitted. */
export const searchAll = async (query: string): Promise<SearchResults> => {
    const pages = await Promise.all(CATEGORIES.map(category => searchCategory(query, category)))
    const results: SearchResults = {}
    CATEGORIES.forEach((category, index) => {
        const page = pages[index]
        if (page && page.count > 0) results[category] = page
    })
    return results
}
