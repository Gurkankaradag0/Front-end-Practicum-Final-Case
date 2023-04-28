import { Routes, Route } from 'react-router-dom' 

import Layout from "./components/Layout"

import Home from "./pages/Home"
import Planets from "./pages/Planets"
import Ships from "./pages/Ships"
import Vehicles from "./pages/Vehicles"
import Characters from "./pages/Characters"
import Films from "./pages/Films"
import Races from "./pages/Races"

import Detail from './pages/Detail'

import Page404 from "./pages/Page404"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />}/>
        <Route path="/planets">
          <Route index={true} element={<Planets />}/>
          <Route path=":id" element={<Detail category="planets" />}/>
        </Route>
        <Route path="/ships">
          <Route index={true} element={<Ships />}/>
          <Route path=":id" element={<Detail category="ships" />}/>
        </Route>
        <Route path="/vehicles">
          <Route index={true} element={<Vehicles />}/>
          <Route path=":id" element={<Detail category="vehicles" />}/>
        </Route>
        <Route path="/characters">
          <Route index={true} element={<Characters />}/>
          <Route path=":id" element={<Detail category="characters" />}/>
        </Route>
        <Route path="/films">
          <Route index={true} element={<Films />}/>
          <Route path=":id" element={<Detail category="films" />}/>
        </Route>
        <Route path="/races">
          <Route index={true} element={<Races />}/>
          <Route path=":id" element={<Detail category="races" />}/>
        </Route>
        <Route path='*' element={<Page404 />}/>
      </Route>
    </Routes>
  )
}

export default App
