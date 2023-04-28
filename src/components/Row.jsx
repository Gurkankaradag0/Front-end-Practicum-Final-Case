import { memo } from "react"
import { Link } from "react-router-dom"

function Row({ result, category }) {

  const title = result.name ? result.name : result.title

  return (
    <Link to={`/${category}/${result.id}`} className="h-[300px] m-auto w-full max-w-[600px] flex items-center relative">
      <div className="absolute z-20 w-[150px] left-1/2 -translate-x-3/4 max-h-[150px] h-full pointer-events-none">
        <div className="flex absolute items-center pointer-events-none select-none top-1/2 right-0 -translate-y-1/2 -translate-x-[130px] max-[750px]:-translate-x-[110px] max-[650px]:-translate-x-[100px] max-[550px]:-translate-x-[90px] max-[450px]:-translate-x-[80px] max-[350px]:-translate-x-[70px] max-[300px]:-translate-x-[50px]">
          <img 
            src={result.image} 
            alt={title} 
            className="object-contain object-[center_right]" 
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-3/4 h-[85%] rounded-[30px] absolute top-1/2 right-0 -translate-y-1/2 max-[750px]:w-4/5 max-[650px]:w-[85%] max-[550px]:w-[90%] max-[450px]:w-[95%] max-[350px]:w-full">
        <div className="relative w-full h-full z-10 flex box-content">
          <div className="w-full h-full relative shrink-0">
            <div className="h-full flex items-center w-full overflow-hidden relative rounded-[30px]">
              <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-1-bg.webp" alt={title} className="rounded-[30px] absolute top-0 left-0 w-full h-full block object-cover" />
              <div className="pt-[1px] relative z-20 w-full pl-[150px] pr-[80px] flex flex-col justify-center gap-y-4 max-[300px]:pl-[130px] max-[275px]:pl-[110px] max-[250px]:pl-[90px]">
                <h1 className="font-bold text-2xl">{title}</h1>
                {
                  result?.model && 
                  <h1 className="font-semibold text-sm">{result.model}</h1>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default memo(Row)