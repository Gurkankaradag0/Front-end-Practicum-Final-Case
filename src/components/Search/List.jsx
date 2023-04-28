import { Icon } from '~/Icons'
import Row from './Row'

function List( { data, category, loadMoreHandle, singelLoad } ) {
    return (
        <>
            <div
                className="grid grid-cols-2 max-[1300px]:grid-cols-1 px-16 relative py-8 max-[750px]:px-12 max-[650px]:px-10 max-[550px]:px-8 max-[450px]:px-6 max-[350px]:px-4"
            >
                {
                    data.results.map((result, index) => (
                        <Row key={index} result={result} category={category} />
                    ))
                }
            </div>
            {
                data.next && (
                    <div className='flex justify-center items-center my-4'>
                        <button
                            className='flex justify-center items-center bg-white hover:bg-white/75 px-4 py-2 rounded-full text-black font-semibold disabled:bg-white/75'
                            onClick={loadMoreHandle}
                            disabled={singelLoad}
                        >
                            {
                                singelLoad && <Icon name="spin" />
                            }
                            LOAD MORE
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default List