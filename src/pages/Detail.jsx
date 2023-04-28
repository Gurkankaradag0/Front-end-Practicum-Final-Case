import { useParams, useNavigate } from "react-router-dom"
import { getDetails } from "~/utils/store"
import { useState, useEffect } from "react"
import { getDetail } from "~/services/api"
import { useImmer } from "use-immer"
import Row from "~/components/Row"
import { Link } from "react-router-dom"
import { getDetailTitles, getType } from "~/utils/details"
import classNames from "classnames"
import { useWindowSize } from "react-use"
import Loader from "~/components/Loader"

function Detail({ category }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(false)
  const [subDatas, setSubDatas] = useImmer({})
  const { width } = useWindowSize()
  const [loading, setLoading] = useState(true)
  const [subDataCount, setSubDataCount] = useState(0)
  const [subDataFinish, setSubDataFinish] = useState(false)

  useEffect(() => {
    setSubDatas({});
    setSubDataCount(0);
    setSubDataFinish(false);
    setLoading(true);
    (isNaN(parseInt(id)) || (!isNaN(parseInt(id)) && parseInt(id).toString().length !== id.length)) && navigate('/*');
    (async () => {
      const _data = getDetails(category).find(result => result.id === id) || await getDetail(category, id)
      !_data && navigate('/404')
      setData(_data)
    })()
  }, [id])

  useEffect(() => {
    if(data) {
      if (data?.homeworld) {
        setSubDataCount(count => count + 1);
        (async () => {
          const _data = getDetails("planets").find(result => result.id === data.homeworld) || await getDetail("planets", data.homeworld)
          setSubDatas(_subDatas => {
            !("planets" in _subDatas) && (_subDatas.planets = [])
            _subDatas.planets = [..._subDatas.planets, { id: data.homeworld, name: _data.name }]
          })
        })();
      }
      Object.entries(data).forEach(([key, value]) => {
        if (typeof value === "object") {
          setSubDataCount(count => count + value.length)
          value.forEach( async val => {
            const _category = getType(key)
            const _data = getDetails(_category).find(result => result.id === val) || await getDetail(_category, val);
            setSubDatas(_subDatas => {
              !(_category in _subDatas) && (_subDatas[_category] = [])
              _subDatas[_category] = [..._subDatas[_category], { id: val, name: _category === "films" ? _data.title : _data.name }]
            });
          })
        }
      })
      setSubDataFinish(true)
    }
  }, [data])

  useEffect(() => {
    if (!subDataFinish) return
    let count = 0
    Object.keys(subDatas).forEach((key) => {
      count = count + subDatas[key].length
    })
    count === subDataCount && setLoading(false)
  }, [subDatas])

  if (loading) return (
    <div className="flex justify-center items-center relative w-full min-h-[100px]">
      <Loader />
    </div>
  )

  return (
    <div className="flex flex-col mx-auto px-16 max-[750px]:px-12 max-[650px]:px-10 max-[550px]:px-8 max-[450px]:px-6 max-[350px]:px-4">
      <Row result={data} category={category} />
      <div className="flex flex-col justify-center items-center w-3/4 m-auto gap-y-8 mb-16 mt-6 max-[750px]:w-4/5 max-[650px]:w-[85%] max-[550px]:w-[90%] max-[450px]:w-[95%] max-[350px]:w-full">
        <div className="flex flex-col justify-center w-full gap-y-2">
          <div className="border-b-2 border-solid border-white/75 uppercase font-semibold text-lg">
            <span className="px-4">Details</span>
          </div>
          <div className={classNames({
            "grid max-[960px]:grid-cols-2": true,
            "grid-cols-4": getDetailTitles[category].length === 4,
            "grid-cols-3": getDetailTitles[category].length === 6
          })}>
            {
              getDetailTitles[category].map((item, index) => (
                <div key={index} className={classNames({
                  "flex flex-col gap-y-2 px-4": true,
                  "border-l border-solid border-white/50": width > 960 
                                                              ? getDetailTitles[category].length === 6 
                                                                ? index % 3 !== 0 
                                                                : index !== 0
                                                              : index % 2 !== 0,
                  "border-b border-solid border-white/50": width <= 960 || getDetailTitles[category].length === 6
                })}>
                  <span className="font-semibold text-sm">{item.title}</span>
                  <span className="text-sm">{data[item.key]}</span>
                </div>
              ))
            }
          </div>
        </div>
        {
          Object.entries(subDatas).map(([key, value], index) => {
            if (value.length > 0) return (
              <div key={index} className="flex flex-col justify-center w-full">
                <div 
                  className="border-b-2 border-solid border-white/75 uppercase font-semibold text-lg"
                >
                  <span className="px-4">{getType(key)}</span>
                </div>
                <div className="flex flex-wrap gap-x-2 px-4 gap-y-1 mt-2">
                  {
                    value.map((item, index) => (
                      <span key={index}>
                        <Link 
                          to={`/${key}/${item.id}`} 
                          className="border-b border-solid border-yellow-500 hover:border-white"
                        >
                          {item.name}
                        </Link>
                        {
                          value.length - 1 !== index && `,`
                        }
                      </span>
                    ))
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Detail