import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    hasMore: true,
    nextPage: null,
    results: []
}

const planets = createSlice({
    name: 'planets',
    initialState,
    reducers: {
        _addPlanets: (state, action) => {state.results = [...state.results, ...action.payload]},
        _setPlanetsNextPage: (state, action) => {state.nextPage = action.payload},
        _setPlanetsHasMore: (state, action) => {state.hasMore = action.payload}
    }
})

export const { _addPlanets, _setPlanetsNextPage, _setPlanetsHasMore } = planets.actions
export default planets.reducer