import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    hasMore: true,
    nextPage: null,
    results: []
}

const spaceShips = createSlice({
    name: 'spaceShips',
    initialState,
    reducers: {
        _addSpaceShips: (state, action) => {state.results = [...state.results, ...action.payload]},
        _setSpaceShipsNextPage: (state, action) => {state.nextPage = action.payload},
        _setSpaceShipsHasMore: (state, action) => {state.hasMore = action.payload}
    }
})

export const { _addSpaceShips, _setSpaceShipsNextPage, _setSpaceShipsHasMore } = spaceShips.actions
export default spaceShips.reducer