import { useSelector } from 'react-redux'
import store from '~/store'
import type { RootState } from '~/store'

import { _setOpen, _setClose } from '~/store/navbar'
import { categorySlices } from '~/store/categories'
import { getCategoryPage } from '~/services/api'
import type { Category, CategoryState, Entity } from '~/types'

export const useAppSelector = useSelector.withTypes<RootState>()

// Navbar
export const useNavbar = () => useAppSelector(state => state.navbar)
export const setOpen = () => store.dispatch(_setOpen())
export const setClose = () => store.dispatch(_setClose())

// Categories
export const useCategoryState = (category: Category): CategoryState => useAppSelector(state => state[category])

/** Already-listed entities of a category, used as a cache by the detail page. */
export const getCachedResults = (category: Category): Entity[] => store.getState()[category].results

const loading = new Set<Category>()

/** Fetches the next page of a category and merges it into the store. */
export const loadCategoryPage = async (category: Category): Promise<boolean> => {
    if (loading.has(category)) return true
    loading.add(category)

    try {
        const { nextPage } = store.getState()[category]
        const page = await getCategoryPage(category, nextPage ?? 1)
        const { actions } = categorySlices[category]

        if (!page) {
            store.dispatch(actions.setError(true))
            return false
        }

        store.dispatch(actions.setHasMore(page.hasMore))
        store.dispatch(actions.setNextPage(page.nextPage))
        store.dispatch(actions.addItems(page.results))
        return true
    } finally {
        loading.delete(category)
    }
}
