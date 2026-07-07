import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'
import Row from './Row'
import type { Category, CategoryState } from '~/types'

interface ListProps {
    data: CategoryState
    next: () => void
    category: Category
}

const List = ({ data, next, category }: ListProps) => {
    return (
        <InfiniteScroll
            dataLength={data.results.length}
            next={next}
            hasMore={data.hasMore}
            loader={<Loader />}
            className="grid grid-cols-2 max-[1300px]:grid-cols-1 px-16 relative py-8 max-[750px]:px-12 max-[650px]:px-10 max-[550px]:px-8 max-[450px]:px-6 max-[350px]:px-4"
        >
            {data.results.map((result, index) => (
                <Row key={index} result={result} category={category} />
            ))}
        </InfiniteScroll>
    )
}

export default List
