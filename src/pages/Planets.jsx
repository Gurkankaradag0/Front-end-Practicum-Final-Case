import { useEffect } from "react"
import List from "~/components/List"
import { usePlanets } from "~/utils/store"
import { getPlanets } from "~/services/api"
// import shipData from "~/utils/getImageUrl"

function Planets() {
  const planets = usePlanets()
  const next = async () => await getPlanets(planets.nextPage ? planets.nextPage : 1)
  // const spaceShipModels = shipData()
  const planetsModels = []
  
  useEffect(() => {
    planets.results.length === 0 && getPlanets()
  }, [])

  return (
    <>
      <List data={planets} next={next} category="planets" models={planetsModels} />
    </>
  )
}

export default Planets