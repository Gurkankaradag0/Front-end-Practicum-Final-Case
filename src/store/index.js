import { configureStore } from "@reduxjs/toolkit"

import navbar from "./navbar"

import planets from "./planets"
import ships from './ships'
import vehicles from "./vehicles"
import characters from "./characters"
import films from './films'
import races from "./races"

const store = configureStore({
    reducer: {
        navbar,
        planets,
        ships,
        vehicles,
        characters,
        films,
        races
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store