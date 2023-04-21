import { configureStore } from "@reduxjs/toolkit"

import navbar from "./navbar"

import planets from "./planets"
import spaceShips from './spaceShips'
import vehicles from "./vehicles"
import people from "./people"
import films from './films'
import species from "./species"

const store = configureStore({
    reducer: {
        navbar,
        planets,
        spaceShips,
        vehicles,
        people,
        films,
        species
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store