import { useEffect } from "react"
import List from "~/components/List"
import { useShips } from "~/utils/store"
import { getShips } from "~/services/api"

function Ships() {
  const ships = useShips()
  const next = async () => await getShips(ships.nextPage ? ships.nextPage : 1)
  
  useEffect(() => {
    ships.results.length === 0 && getShips()
  }, [])

  return (
    <>
      <List data={ships} next={next} category="ships" />
    </>
  )
}

export default Ships