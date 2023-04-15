import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    loading: false,
    currentPage: 1,
    nextPage: null,
    previousPage: null,
    ships: []
}

const ships = createSlice({
    name: 'ships',
    initialState,
    reducers: {
        _setLoading: (state, action) => state.loading = action.payload,
        _addShips: (state, action) => state.ships = [...state.ships, action.payload],
        _setCurrentPage: (state, action) => state.currentPage = action.payload,
        _setNextPage: (state, action) => state.nextPage = action.payload,
        _setPreviousPage: (state, action) => state.previousPage = action.payload
    }
})

export const { _setLoading, _addShips, _setCurrentPage, _setNextPage, _setPreviousPage } = ships.actions
export default ships.reducer