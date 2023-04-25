import { useEffect } from "react"
import List from "~/components/List"
import { useRaces } from "~/utils/store"
import { getRaces } from "~/services/api"

function Races() {
  const races = useRaces()
  const next = async () => await getRaces(races.nextPage ? races.nextPage : 1)
  
  useEffect(() => {
    races.results.length === 0 && getRaces()
  }, [])

  return (
    <>
      <List data={races} next={next} category="races" />
    </>
  )
}

export default Races