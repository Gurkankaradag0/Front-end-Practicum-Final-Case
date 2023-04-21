import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    hasMore: true,
    nextPage: null,
    results: []
}

const films = createSlice({
    name: 'films',
    initialState,
    reducers: {
        _addFilms: (state, action) => {state.results = [...state.results, ...action.payload]},
        _setFilmsNextPage: (state, action) => {state.nextPage = action.payload},
        _setFilmsHasMore: (state, action) => {state.hasMore = action.payload}
    }
})

export const { _addFilms, _setFilmsNextPage, _setFilmsHasMore } = films.actions
export default films.reducer