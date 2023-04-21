import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    isOpen: false
}

const navbar = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        _setOpen: state => {state.isOpen = true},
        _setClose: state => {state.isOpen = false}
    }
})

export const { _setOpen, _setClose } = navbar.actions
export default navbar.reducer