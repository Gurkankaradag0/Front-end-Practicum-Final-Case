import { useEffect } from "react"
import List from "~/components/List"
import { useCharacters } from "~/utils/store"
import { getCharacters } from "~/services/api"

function Characters() {
  const characters = useCharacters()
  const next = async () => await getCharacters(characters.nextPage ? characters.nextPage : 1)
  
  useEffect(() => {
    characters.results.length === 0 && getCharacters()
  }, [])

  return (
    <>
      <List data={characters} next={next} category="characters" />
    </>
  )
}

export default Characters