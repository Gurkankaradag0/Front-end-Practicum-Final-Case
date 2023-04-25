import { useMemo } from "react"
import { Link } from "react-router-dom"
import data from '~/data'

function Row({ result, category }) {

  const models = useMemo(() => {
    return data[category]
  }, [])

  const title = useMemo(() => {
    return result.name ? result.name : result.title
  }, [])

  return (
    <Link to={`/${category}/${result.id}`} className="h-[300px] m-auto w-full max-w-[600px] flex items-center relative">
      <div className="absolute z-20 w-[200px] left-1/2 -translate-x-3/4 max-h-[300px] h-full pointer-events-none">
        <div className="flex absolute items-center pointer-events-none select-none top-1/2 right-0 -translate-y-1/2 -translate-x-[130px]">
          <img 
            src={models.find(model => model.name.includes(title))?.image} 
            alt={title} 
            className="object-contain object-[center_right]" 
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-3/4 h-[85%] rounded-[30px] absolute top-1/2 right-0 -translate-y-1/2">
        <div className="relative w-full h-full z-10 flex box-content">
          <div className="w-full h-full relative shrink-0">
            <div className="h-full flex items-center w-full overflow-hidden relative rounded-[30px]">
              <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-1-bg.webp" alt={title} className="rounded-[30px] absolute top-0 left-0 w-full h-full block object-cover" />
              <div className="pt-[1px] relative z-20 w-full pl-[150px] pr-[80px] flex flex-col justify-center gap-y-4">
                <h1 className="font-bold text-2xl">{title}</h1>
                <h1 className="font-bold text-sm">{result.model}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Row