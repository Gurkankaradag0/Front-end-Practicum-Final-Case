import { useEffect } from "react"
import List from "~/components/List"
import { useSpaceShips } from "~/utils/store"
import { getSpaceShips } from "~/services/api"
import shipData from "~/utils/getImageUrl"

function Spaceships() {
  const spaceShips = useSpaceShips()
  const next = async () => await getSpaceShips(spaceShips.nextPage ? spaceShips.nextPage : 1)
  const spaceShipModels = shipData()
  
  useEffect(() => {
    spaceShips.results.length === 0 && getSpaceShips()
  }, [])

  return (
    <>
      <List data={spaceShips} next={next} category="spaceships" models={spaceShipModels} />
    </>
  )
}

export default Spaceships