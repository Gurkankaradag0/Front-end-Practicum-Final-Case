import { Icon } from '~/Icons'
import Row from '~/components/Row'
import type { Category, SearchPage } from '~/types'

interface ListProps {
    data: SearchPage
    category: Category
    loadMoreHandle: () => void
    singleLoad: boolean
}

const List = ({ data, category, loadMoreHandle, singleLoad }: ListProps) => {
    return (
        <>
            <div className={`grid ${data.results.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} max-[1300px]:grid-cols-1 px-16 relative py-8 max-[750px]:px-12 max-[650px]:px-10 max-[550px]:px-8 max-[450px]:px-6 max-[350px]:px-4`}>
                {data.results.map((result, index) => (
                    <Row key={index} result={result} category={category} />
                ))}
            </div>
            {data.nextPage !== null && (
                <div className="flex justify-center items-center my-4">
                    <button
                        className="flex justify-center items-center bg-white hover:bg-white/75 px-4 py-2 rounded-full text-black font-semibold disabled:bg-white/75"
                        onClick={loadMoreHandle}
                        disabled={singleLoad}
                    >
                        {singleLoad && <Icon name="spin" />}
                        LOAD MORE
                    </button>
                </div>
            )}
        </>
    )
}

export default List
