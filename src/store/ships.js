import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    hasMore: true,
    nextPage: null,
    results: []
}

const ships = createSlice({
    name: 'ships',
    initialState,
    reducers: {
        _addShips: (state, action) => {state.results = [...state.results, ...action.payload]},
        _setShipsNextPage: (state, action) => {state.nextPage = action.payload},
        _setShipsHasMore: (state, action) => {state.hasMore = action.payload}
    }
})

export const { _addShips, _setShipsNextPage, _setShipsHasMore } = ships.actions
export default ships.reducer