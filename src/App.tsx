import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import { CATEGORIES } from '~/utils/categories'

import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Page404 from './pages/Page404'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {CATEGORIES.map(category => (
                    <Route key={category} path={`/${category}`}>
                        <Route index element={<CategoryPage category={category} />} />
                        <Route path=":id" element={<Detail category={category} />} />
                    </Route>
                ))}
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    )
}

export default App
