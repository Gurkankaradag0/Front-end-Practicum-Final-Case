import { useEffect } from 'react'
import List from '~/components/List'
import { useCategoryState, loadCategoryPage } from '~/utils/store'
import type { Category } from '~/types'

interface CategoryPageProps {
    category: Category
}

const CategoryPage = ({ category }: CategoryPageProps) => {
    const state = useCategoryState(category)

    useEffect(() => {
        if (state.results.length === 0) loadCategoryPage(category)
    }, [category])

    return <List data={state} next={() => loadCategoryPage(category)} category={category} />
}

export default CategoryPage
