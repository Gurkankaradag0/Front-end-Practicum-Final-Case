import type { Category } from '~/types'

export interface DetailField {
    key: string
    title: string
}

const vehicleFields: DetailField[] = [
    { key: 'max_atmosphering_speed', title: 'Max Atmosphering Speed' },
    { key: 'manufacturer', title: 'Manufacturer' },
    { key: 'crew', title: 'Crew' },
    { key: 'cargo_capacity', title: 'Cargo Capacity' },
    { key: 'length', title: 'Length' },
    { key: 'passengers', title: 'Passengers' }
]

export const getDetailTitles: Record<Category, DetailField[]> = {
    planets: [
        { key: 'diameter', title: 'Diameter' },
        { key: 'population', title: 'Population' },
        { key: 'orbital_period', title: 'Orbital Period' },
        { key: 'rotation_period', title: 'Rotation Period' },
        { key: 'terrain', title: 'Terrain' },
        { key: 'gravity', title: 'Gravity' }
    ],
    ships: vehicleFields,
    vehicles: vehicleFields,
    characters: [
        { key: 'birth_year', title: 'Birth Year' },
        { key: 'gender', title: 'Gender' },
        { key: 'height', title: 'Height' },
        { key: 'mass', title: 'Mass' },
        { key: 'hair_color', title: 'Hair Color' },
        { key: 'eye_color', title: 'Eye Color' }
    ],
    films: [
        { key: 'director', title: 'Director' },
        { key: 'episode_id', title: 'Episodes' },
        { key: 'producer', title: 'Producer' },
        { key: 'release_date', title: 'Release Date' }
    ],
    races: [
        { key: 'average_height', title: 'Average Height' },
        { key: 'average_lifespan', title: 'Average Lifespan' },
        { key: 'classification', title: 'Classification' },
        { key: 'language', title: 'Language' },
        { key: 'designation', title: 'Designation' },
        { key: 'skin_colors', title: 'Skin Colors' }
    ]
}
