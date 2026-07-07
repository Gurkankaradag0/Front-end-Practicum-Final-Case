import imageData from '~/data'
import { RELATION_KEYS } from '~/types'
import type { Category, Entity, SwapiEntity } from '~/types'

/** Extracts the numeric id from a SWAPI resource URL like `https://swapi.dev/api/people/1/`. */
export const idFromUrl = (url: string): number => {
    const parts = url.split('/').filter(Boolean)
    return parseInt(parts[parts.length - 1])
}

/** Extracts the `page` query param from a SWAPI next/previous URL, `null` when absent. */
export const pageFromUrl = (url: string | null): number | null => {
    if (!url) return null
    const page = new URL(url).searchParams.get('page')
    return page ? parseInt(page) : null
}

/** Normalizes a raw SWAPI record: URLs become numeric ids, a local image gets attached. */
export const manipulate = (data: SwapiEntity, category: Category): Entity => {
    const displayName = category === 'films' ? data.title : data.name
    const entity: Entity = {
        id: idFromUrl(data.url),
        image: imageData[category].find(entry => entry.name === displayName)?.image
    }

    for (const [key, value] of Object.entries(data)) {
        if (key === 'url') continue
        if (key === 'homeworld') {
            entity.homeworld = typeof value === 'string' ? idFromUrl(value) : null
            continue
        }
        if (RELATION_KEYS.includes(key as (typeof RELATION_KEYS)[number]) && Array.isArray(value)) {
            entity[key] = value.map(idFromUrl)
            continue
        }
        if (typeof value === 'string' || typeof value === 'number') {
            entity[key] = value
        }
    }

    return entity
}
