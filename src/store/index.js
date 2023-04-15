import { configureStore } from "@reduxjs/toolkit"
import ships from './ships'

const store = configureStore({
    reducer: {
        ships
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store