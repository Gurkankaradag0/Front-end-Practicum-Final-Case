import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useImmer } from "use-immer"
import Loader from "~/components/Loader"
import List from "~/components/Search/List"
import { search } from "~/services/api"
import { getType } from "~/utils/details"

function Search() {
  const { state } = useLocation()
  const [loading, setLoading] = useState(true)
  const [singelLoad, setSingelLoad] = useState(false)
  const [results, setResults] = useImmer({})

  useEffect(() => {
    setLoading(true);
    setResults({});
    (async () => {
      const datas = await search(state.search)
      setResults(datas)
      setLoading(false)
    })();
  }, [state])

  const loadMoreHandle = (next, type) => {
    setSingelLoad(true);
    (async () => {
      const datas = await search(state.search, next, type)
      setResults(result => {
        result[type].next = datas.next
        result[type].results = [...result[type].results, ...datas.results]
      })
      setSingelLoad(false)
    })();
  }

  if (loading) return (
    <div className="flex justify-center items-center relative w-full min-h-[100px]">
      <Loader />
    </div>
  )

  return (
    <div className="flex flex-col justify-center items-center py-4 px-16">
      <span className="text-sm my-4">Top search results for "{state.search}"</span>
      {
        Object.keys(results).length > 0
        ? 
          Object.entries(results).map(([key, value],index) => (
            <div
              key={index}
              className="w-full"
            >
              <div className="flex justify-between items-center border-b-2 border-solid border-white/80 uppercase font-bold text-xl px-4 py-2">
                {getType(key).toUpperCase()}
                <Link to={`/${getType(key)}`} className="text-yellow-300">[ALL]</Link>
              </div>
              <List data={value} category={getType(key)} loadMoreHandle={() => loadMoreHandle(value.next, key)} singelLoad={singelLoad} />
            </div>
          ))
        : (
            <div className="bg-yellow-300 text-black font-semibold text-lg px-16 py-2 rounded-md mt-8">
              Please try another search or check the spelling
            </div>
          )
      }
    </div>
  )
}

export default Search