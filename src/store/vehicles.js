import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    hasMore: true,
    nextPage: null,
    results: []
}

const vehicles = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        _addVehicles: (state, action) => {state.results = [...state.results, ...action.payload]},
        _setVehiclesNextPage: (state, action) => {state.nextPage = action.payload},
        _setVehiclesHasMore: (state, action) => {state.hasMore = action.payload}
    }
})

export const { _addVehicles, _setVehiclesNextPage, _setVehiclesHasMore } = vehicles.actions
export default vehicles.reducer