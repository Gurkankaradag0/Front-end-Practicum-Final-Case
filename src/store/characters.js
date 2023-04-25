import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    hasMore: true,
    nextPage: null,
    results: []
}

const characters = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        _addCharacters: (state, action) => {state.results = [...state.results, ...action.payload]},
        _setCharactersNextPage: (state, action) => {state.nextPage = action.payload},
        _setCharactersHasMore: (state, action) => {state.hasMore = action.payload}
    }
})

export const { _addCharacters, _setCharactersNextPage, _setCharactersHasMore } = characters.actions
export default characters.reducer