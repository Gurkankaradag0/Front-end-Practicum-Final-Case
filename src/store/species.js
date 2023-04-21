import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    hasMore: true,
    nextPage: null,
    results: []
}

const species = createSlice({
    name: 'species',
    initialState,
    reducers: {
        _addSpecies: (state, action) => {state.results = [...state.results, ...action.payload]},
        _setSpeciesNextPage: (state, action) => {state.nextPage = action.payload},
        _setSpeciesHasMore: (state, action) => {state.hasMore = action.payload}
    }
})

export const { _addSpecies, _setSpeciesNextPage, _setSpeciesHasMore } = species.actions
export default species.reducer