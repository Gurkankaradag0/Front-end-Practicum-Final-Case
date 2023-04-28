import axios from 'axios'
import { manipulate } from '~/utils/api'
import { getType } from '~/utils/details'
import { 
    addPlanets, setPlanetsNextPage, setPlanetsHasMore,
    addShips, setShipsNextPage, setShipsHasMore,
    addVehicles, setVehiclesNextPage, setVehiclesHasMore,
    addCharacters, setCharactersNextPage, setCharactersHasMore,
    addFilms, setFilmsNextPage, setFilmsHasMore,
    addRaces, setRacesNextPage, setRacesHasMore,
 } from '~/utils/store'

const getDetail = async (category, id) => {
    try {
        const type = category === "races" ? "species" : category === "characters" ? "people" : category === "ships" ? "starships" : category
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/${type}/${id}`)
        return manipulate(data, category)
    }
    catch(e) {
        return false
    }
}

const getPlanets = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/planets/?page=${page}`)
        setPlanetsHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            newData.results[index] = manipulate(element, "planets")
        })
        setPlanetsNextPage(newData.next)
        addPlanets(newData.results.filter(result => result.name !== "unknown"))
        return true
    }
    catch(e) {
        return false
    }
}

const getShips = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/starships/?page=${page}`)
        setShipsHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            newData.results[index] = manipulate(element, "ships")
        })
        setShipsNextPage(newData.next)
        addShips(newData.results)
        return true
    }
    catch(e) {
        return false
    }
}

const getVehicles = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/vehicles/?page=${page}`)
        setVehiclesHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            newData.results[index] = manipulate(element, "vehicles")
        })
        setVehiclesNextPage(newData.next)
        addVehicles(newData.results)
        return true
    }
    catch(e) {
        return false
    }
}

const getCharacters = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/people/?page=${page}`)
        setCharactersHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            newData.results[index] = manipulate(element, "characters")
        })
        setCharactersNextPage(newData.next)
        addCharacters(newData.results)
        return true
    }
    catch(e) {
        return false
    }
}

const getFilms = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/films/?page=${page}`)
        setFilmsHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            newData.results[index] = manipulate(element, "films")
        })
        setFilmsNextPage(newData.next)
        addFilms(newData.results)
        return true
    }
    catch(e) {
        return false
    }
}

const getRaces = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/species/?page=${page}`)
        setRacesHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            newData.results[index] = manipulate(element, "races")
        })
        setRacesNextPage(newData.next)
        addRaces(newData.results)
        return true
    }
    catch(e) {
        return false
    }
}

const search = async (value, page = 1, type = false) => {
    try {
        if (!type) {
            const types = ["planets", "starships", "vehicles", "people", "films", "species"]
            const datas = {}
            for (const _type of types) {
                const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/${_type}/?search=${value}&page=${page}`)
                if (data.count > 0){
                    const newData = { ...data, next: data.next ? parseInt(data.next.split('&page=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('&page=')[1]) : null }
                    data.results.forEach((element, index) => {
                        newData.results[index] = manipulate(element, getType(_type))
                    })
                    datas[_type] = newData
                }
            }
            return datas
        }
        else {
            const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/${type}/?search=${value}&page=${page}`)
            const newData = { ...data, next: data.next ? parseInt(data.next.split('&page=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('&page=')[1]) : null }
            data.results.forEach((element, index) => {
                newData.results[index] = manipulate(element, getType(type))
            })
            return newData
        }
    }
    catch(e) {
        return false
    }
}

export { getDetail, getPlanets, getShips, getVehicles, getCharacters, getFilms, getRaces, search }