export const CATEGORIES = ['planets', 'ships', 'vehicles', 'characters', 'films', 'races'] as const

export type Category = (typeof CATEGORIES)[number]

export const RELATION_KEYS = ['residents', 'people', 'films', 'pilots', 'vehicles', 'starships', 'characters', 'planets', 'species'] as const

export type RelationKey = (typeof RELATION_KEYS)[number]

/**
 * A SWAPI record after normalization: the resource URL is replaced with a numeric `id`,
 * relation URLs are replaced with numeric id arrays and a local `image` is attached.
 * The remaining SWAPI fields (diameter, crew, birth_year...) stay as raw strings.
 */
export interface Entity {
    id: number
    image?: string
    name?: string
    title?: string
    model?: string
    homeworld?: number | null
    residents?: number[]
    people?: number[]
    films?: number[]
    pilots?: number[]
    vehicles?: number[]
    starships?: number[]
    characters?: number[]
    planets?: number[]
    species?: number[]
    [key: string]: string | number | number[] | null | undefined
}

/** Raw SWAPI record as it comes from the API (relations are resource URLs). */
export interface SwapiEntity {
    url: string
    name?: string
    title?: string
    homeworld?: string | null
    [key: string]: string | string[] | number | null | undefined
}

/** Raw SWAPI paginated response. */
export interface SwapiPage {
    count: number
    next: string | null
    previous: string | null
    results: SwapiEntity[]
}

export interface CategoryState {
    hasMore: boolean
    nextPage: number | null
    results: Entity[]
    error: boolean
}

export interface SearchPage {
    count: number
    nextPage: number | null
    results: Entity[]
}

export type SearchResults = Partial<Record<Category, SearchPage>>

export interface ImageEntry {
    name: string
    image: string
}
