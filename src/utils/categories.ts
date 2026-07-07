import { CATEGORIES } from '~/types'
import type { Category } from '~/types'

/** App category → SWAPI resource path. */
export const API_RESOURCES: Record<Category, string> = {
    planets: 'planets',
    ships: 'starships',
    vehicles: 'vehicles',
    characters: 'people',
    films: 'films',
    races: 'species'
}

/** SWAPI resource name or relation key → app category. */
export const toCategory = (key: string): Category => {
    switch (key) {
        case 'people':
        case 'pilots':
        case 'residents':
        case 'characters':
            return 'characters'
        case 'species':
        case 'races':
            return 'races'
        case 'starships':
        case 'ships':
            return 'ships'
        case 'planets':
        case 'films':
        case 'vehicles':
            return key
        default:
            return key as Category
    }
}

export { CATEGORIES }
