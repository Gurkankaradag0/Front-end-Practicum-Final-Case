import { Routes, Route } from 'react-router-dom' 

import Layout from "./components/Layout"

import Home from "./pages/Home"
import Planets from "./pages/Planets"
import SpaceShips from "./pages/SpaceShips"
import Vehicles from "./pages/Vehicles"
import People from "./pages/People"
import Films from "./pages/Films"
import Species from "./pages/Species"

import Detail from './pages/Detail'

import Page404 from "./pages/Page404"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />}/>
        <Route path="/planets">
          <Route index={true} element={<Planets />}/>
          <Route path=":id" element={<Detail />}/>
        </Route>
        <Route path="/spaceships">
          <Route index={true} element={<SpaceShips />}/>
          <Route path=":id" element={<Detail />}/>
        </Route>
        <Route path="/vehicles">
          <Route index={true} element={<Vehicles />}/>
          <Route path=":id" element={<Detail />}/>
        </Route>
        <Route path="/people">
          <Route index={true} element={<People />}/>
          <Route path=":id" element={<Detail />}/>
        </Route>
        <Route path="/films">
          <Route index={true} element={<Films />}/>
          <Route path=":id" element={<Detail />}/>
        </Route>
        <Route path="/species">
          <Route index={true} element={<Species />}/>
          <Route path=":id" element={<Detail />}/>
        </Route>
        <Route path='*' element={<Page404 />}/>
      </Route>
    </Routes>
  )
}

export default App
