import { useEffect } from "react"
import List from "~/components/List"
import { useVehicles } from "~/utils/store"
import { getVehicles } from "~/services/api"
// import shipData from "~/utils/getImageUrl"

function Vehicles() {
  const vehicles = useVehicles()
  const next = async () => await getVehicles(vehicles.nextPage ? vehicles.nextPage : 1)
  // const spaceShipModels = shipData()
  const vehiclesModels = []
  
  useEffect(() => {
    vehicles.results.length === 0 && getVehicles()
  }, [])

  return (
    <>
      <List data={vehicles} next={next} category="vehicles" models={vehiclesModels} />
    </>
  )
}

export default Vehicles