import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCachedResults } from '~/utils/store'
import { getDetail } from '~/services/api'
import Row from '~/components/Row'
import { getDetailTitles } from '~/utils/details'
import { toCategory } from '~/utils/categories'
import classNames from 'classnames'
import { useWindowSize } from 'react-use'
import Loader from '~/components/Loader'
import type { Category, Entity } from '~/types'

interface SubEntity {
    id: number
    name: string
}

type SubDatas = Partial<Record<Category, SubEntity[]>>

interface DetailProps {
    category: Category
}

/** Accepts only a clean positive-integer id string (rejects `undefined`, non-numeric, `"01"`, ...). */
const isValidId = (value: string | undefined): value is string => {
    if (value === undefined) return false
    const parsed = parseInt(value)
    return !isNaN(parsed) && parsed.toString().length === value.length
}

const Detail = ({ category }: DetailProps) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { width } = useWindowSize()
    const [data, setData] = useState<Entity | null>(null)
    const [subDatas, setSubDatas] = useState<SubDatas>({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!isValidId(id)) {
            navigate('/*')
            return
        }

        let cancelled = false
        setLoading(true)
        setSubDatas({})
        setData(null)

        const resolveRelation = async (relCategory: Category, relId: number, into: SubDatas) => {
            const cached = getCachedResults(relCategory).find(result => result.id === relId)
            const related = cached ?? (await getDetail(relCategory, relId))
            const name = related ? (relCategory === 'films' ? related.title : related.name) : undefined
            if (!name) return
            if (!into[relCategory]) into[relCategory] = []
            into[relCategory]!.push({ id: relId, name })
        }

        void (async () => {
            const numId = Number(id)
            const cached = getCachedResults(category).find(result => result.id === numId)
            const entity = cached ?? (await getDetail(category, numId))

            if (cancelled) return
            if (!entity) {
                navigate('/404')
                return
            }

            const resolved: SubDatas = {}
            const tasks: Promise<void>[] = []

            if (typeof entity.homeworld === 'number') {
                tasks.push(resolveRelation('planets', entity.homeworld, resolved))
            }

            for (const [key, value] of Object.entries(entity)) {
                if (Array.isArray(value)) {
                    const relCategory = toCategory(key)
                    for (const relId of value) {
                        tasks.push(resolveRelation(relCategory, relId, resolved))
                    }
                }
            }

            await Promise.all(tasks)
            if (cancelled) return

            setData(entity)
            setSubDatas(resolved)
            setLoading(false)
        })()

        return () => {
            cancelled = true
        }
    }, [id, category])

    if (loading || !data) {
        return (
            <div className="flex justify-center items-center relative w-full min-h-[100px]">
                <Loader />
            </div>
        )
    }

    return (
        <div className="flex flex-col mx-auto px-16 max-[750px]:px-12 max-[650px]:px-10 max-[550px]:px-8 max-[450px]:px-6 max-[350px]:px-4">
            <Row result={data} category={category} />
            <div className="flex flex-col justify-center items-center w-3/4 m-auto gap-y-8 mb-16 mt-6 max-[750px]:w-4/5 max-[650px]:w-[85%] max-[550px]:w-[90%] max-[450px]:w-[95%] max-[350px]:w-full">
                <div className="flex flex-col justify-center w-full gap-y-2">
                    <div className="border-b-2 border-solid border-white/75 uppercase font-semibold text-lg">
                        <span className="px-4">Details</span>
                    </div>
                    <div className={classNames({
                        'grid max-[960px]:grid-cols-2': true,
                        'grid-cols-4': getDetailTitles[category].length === 4,
                        'grid-cols-3': getDetailTitles[category].length === 6
                    })}>
                        {getDetailTitles[category].map((item, index) => (
                            <div key={index} className={classNames({
                                'flex flex-col gap-y-2 px-4': true,
                                'border-l border-solid border-white/50':
                                    width > 960
                                        ? getDetailTitles[category].length === 6
                                            ? index % 3 !== 0
                                            : index !== 0
                                        : index % 2 !== 0,
                                'border-b border-solid border-white/50': width <= 960 || getDetailTitles[category].length === 6
                            })}>
                                <span className="font-semibold text-sm">{item.title}</span>
                                <span className="text-sm">{data[item.key]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {Object.entries(subDatas).map(([key, value], index) => {
                    if (!value || value.length === 0) return null
                    return (
                        <div key={index} className="flex flex-col justify-center w-full">
                            <div className="border-b-2 border-solid border-white/75 uppercase font-semibold text-lg">
                                <span className="px-4">{toCategory(key)}</span>
                            </div>
                            <div className="flex flex-wrap gap-x-2 px-4 gap-y-1 mt-2">
                                {value.map((item, i) => (
                                    <span key={i}>
                                        <Link
                                            to={`/${key}/${item.id}`}
                                            className="border-b border-solid border-yellow-500 hover:border-white"
                                        >
                                            {item.name}
                                        </Link>
                                        {value.length - 1 !== i && `,`}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Detail
