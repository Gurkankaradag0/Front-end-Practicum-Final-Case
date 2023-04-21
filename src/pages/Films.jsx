import { useEffect } from "react"
import List from "~/components/List"
import { useFilms } from "~/utils/store"
import { getFilms } from "~/services/api"
// import shipData from "~/utils/getImageUrl"

function Films() {
  const films = useFilms()
  const next = async () => await getFilms(films.nextPage ? films.nextPage : 1)
  // const spaceShipModels = shipData()
  const filmsModels = []
  
  useEffect(() => {
    films.results.length === 0 && getFilms()
  }, [])

  return (
    <>
      <List data={films} next={next} category="films" models={filmsModels} />
    </>
  )
}

export default Films