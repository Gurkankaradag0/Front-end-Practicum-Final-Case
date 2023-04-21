import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from "./Loader"
import Row from './Row'

function List( { data, next, category, models } ) {
    return (
        <InfiniteScroll
            dataLength={data.results.length}
            next={next}
            hasMore={data.hasMore}
            loader={<Loader />}
            className="grid grid-cols-2 max-[1300px]:grid-cols-1 px-16 relative py-8"
        >
            {
                data.results.map((result, index) => (
                    <Row key={index} result={result} category={category} models={models} />
                ))
            }
        </InfiniteScroll>
    )
}

export default List