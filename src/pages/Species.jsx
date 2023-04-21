import { useEffect } from "react"
import List from "~/components/List"
import { useSpecies } from "~/utils/store"
import { getSpecies } from "~/services/api"
// import shipData from "~/utils/getImageUrl"

function Species() {
  const species = useSpecies()
  const next = async () => await getSpecies(species.nextPage ? species.nextPage : 1)
  // const spaceShipModels = shipData()
  const speciesModels = []
  
  useEffect(() => {
    species.results.length === 0 && getSpecies()
  }, [])

  return (
    <>
      <List data={species} next={next} category="species" models={speciesModels} />
    </>
  )
}

export default Species