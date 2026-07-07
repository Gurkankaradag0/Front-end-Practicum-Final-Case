import planets from './planets'
import ships from './ships'
import vehicles from './vehicles'
import characters from './characters'
import films from './films'
import races from './races'
import type { Category, ImageEntry } from '~/types'

const imageData: Record<Category, ImageEntry[]> = {
    planets,
    ships,
    vehicles,
    characters,
    films,
    races
}

export default imageData
