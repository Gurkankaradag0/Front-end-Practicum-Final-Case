import { Routes, Route } from 'react-router-dom' 

import Layout from "./components/Layout"

import Home from "./pages/Home"
import Page404 from "./pages/Page404"
import ShipDetail from "./pages/ShipDetail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />}/>
        <Route path="/starship/:ship_id" element={<ShipDetail />}/>
        <Route path='*' element={<Page404 />}/>
      </Route>
    </Routes>
  )
}

export default App
