import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    hasMore: true,
    nextPage: null,
    results: []
}

const people = createSlice({
    name: 'people',
    initialState,
    reducers: {
        _addPeople: (state, action) => {state.results = [...state.results, ...action.payload]},
        _setPeopleNextPage: (state, action) => {state.nextPage = action.payload},
        _setPeopleHasMore: (state, action) => {state.hasMore = action.payload}
    }
})

export const { _addPeople, _setPeopleNextPage, _setPeopleHasMore } = people.actions
export default people.reducer