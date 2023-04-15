import axios from 'axios'
import ships from '~/data/ships'
import { setLoading, setNextPage, setPreviousPage, addShips } from '~/utils/store'

const getShips = async (page = 1) => {
    try {
        setLoading(true)
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/starships/?page=${page}`)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].imageUrl = ships.filter(item => item.model === element.model)[0].imageUrl
        });
        setNextPage(newData.next)
        setPreviousPage(newData.previous)
        addShips(newData.results)
        setLoading(false)
        return true
    }
    catch {
        return false
    }
}

export { getShips }