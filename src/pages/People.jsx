import { useEffect } from "react"
import List from "~/components/List"
import { usePeople } from "~/utils/store"
import { getPeople } from "~/services/api"
// import shipData from "~/utils/getImageUrl"

function People() {
  const people = usePeople()
  const next = async () => await getPeople(people.nextPage ? people.nextPage : 1)
  // const spaceShipModels = shipData()
  const peopleModels = []
  
  useEffect(() => {
    people.results.length === 0 && getPeople()
  }, [])

  return (
    <>
      <List data={people} next={next} category="people" models={peopleModels} />
    </>
  )
}

export default People