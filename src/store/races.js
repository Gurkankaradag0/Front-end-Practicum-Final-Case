import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    hasMore: true,
    nextPage: null,
    results: []
}

const races = createSlice({
    name: 'races',
    initialState,
    reducers: {
        _addRaces: (state, action) => {state.results = [...state.results, ...action.payload]},
        _setRacesNextPage: (state, action) => {state.nextPage = action.payload},
        _setRacesHasMore: (state, action) => {state.hasMore = action.payload}
    }
})

export const { _addRaces, _setRacesNextPage, _setRacesHasMore } = races.actions
export default races.reducer