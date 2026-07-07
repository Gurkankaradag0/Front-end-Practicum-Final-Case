import { configureStore } from '@reduxjs/toolkit'

import navbar from './navbar'
import { categoryReducers } from './categories'

const store = configureStore({
    reducer: {
        navbar,
        ...categoryReducers
    },
    devTools: import.meta.env.DEV
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
