import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CATEGORIES } from '~/types'
import type { Category, CategoryState, Entity } from '~/types'

const initialState: CategoryState = {
    hasMore: true,
    nextPage: null,
    results: [],
    error: false
}

const createCategorySlice = (name: Category) =>
    createSlice({
        name,
        initialState,
        reducers: {
            addItems: (state, action: PayloadAction<Entity[]>) => {
                state.results.push(...action.payload)
                state.error = false
            },
            setNextPage: (state, action: PayloadAction<number | null>) => {
                state.nextPage = action.payload
            },
            setHasMore: (state, action: PayloadAction<boolean>) => {
                state.hasMore = action.payload
            },
            setError: (state, action: PayloadAction<boolean>) => {
                state.error = action.payload
            }
        }
    })

type CategorySlice = ReturnType<typeof createCategorySlice>

export const categorySlices = Object.fromEntries(CATEGORIES.map(category => [category, createCategorySlice(category)])) as Record<Category, CategorySlice>

export const categoryReducers = Object.fromEntries(CATEGORIES.map(category => [category, categorySlices[category].reducer])) as Record<Category, CategorySlice['reducer']>
