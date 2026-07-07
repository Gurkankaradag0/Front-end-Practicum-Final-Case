import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Loader from '~/components/Loader'
import List from '~/components/Search/List'
import { searchAll, searchCategory } from '~/services/api'
import { toCategory } from '~/utils/categories'
import type { Category, SearchResults } from '~/types'

/** React Router navigation state is untyped/user-controlled; extract a valid non-empty query or `null`. */
const getSearchQuery = (state: unknown): string | null => {
    if (state && typeof state === 'object' && 'search' in state) {
        const value = (state as { search: unknown }).search
        if (typeof value === 'string' && value.length > 0) return value
    }
    return null
}

const Search = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
    const query = getSearchQuery(state)
    const [loading, setLoading] = useState(true)
    const [singleLoad, setSingleLoad] = useState(false)
    const [results, setResults] = useState<SearchResults>({})

    useEffect(() => {
        if (query === null) {
            navigate('/')
            return
        }

        let cancelled = false
        setLoading(true)
        setResults({})

        void (async () => {
            const data = await searchAll(query)
            if (cancelled) return
            setResults(data)
            setLoading(false)
        })()

        return () => {
            cancelled = true
        }
    }, [query])

    const loadMoreHandle = (category: Category) => {
        if (query === null) return
        const page = results[category]
        if (!page || page.nextPage === null) return

        setSingleLoad(true)
        void (async () => {
            const data = await searchCategory(query, category, page.nextPage as number)
            setSingleLoad(false)
            if (!data) return
            setResults(prev => {
                const existing = prev[category]
                if (!existing) return prev
                return {
                    ...prev,
                    [category]: {
                        ...existing,
                        results: [...existing.results, ...data.results],
                        nextPage: data.nextPage
                    }
                }
            })
        })()
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center relative w-full min-h-[100px]">
                <Loader />
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center py-4 px-16">
            <span className="text-sm my-4">Top search results for "{query}"</span>
            {Object.keys(results).length > 0 ? (
                Object.entries(results).map(([key, value], index) => {
                    if (!value) return null
                    const category = toCategory(key)
                    return (
                        <div key={index} className="w-full">
                            <div className="flex justify-between items-center border-b-2 border-solid border-white/80 uppercase font-bold text-xl px-4 py-2">
                                {category.toUpperCase()}
                                <Link to={`/${category}`} className="text-yellow-300">
                                    [ALL]
                                </Link>
                            </div>
                            <List data={value} category={category} loadMoreHandle={() => loadMoreHandle(category)} singleLoad={singleLoad} />
                        </div>
                    )
                })
            ) : (
                <div className="bg-yellow-300 text-black font-semibold text-lg px-16 py-2 rounded-md mt-8">
                    Please try another search or check the spelling
                </div>
            )}
        </div>
    )
}

export default Search
