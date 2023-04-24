import axios from 'axios'
import { 
    addPlanets, setPlanetsNextPage, setPlanetsHasMore,
    addSpaceShips, setSpaceShipsNextPage, setSpaceShipsHasMore,
    addVehicles, setVehiclesNextPage, setVehiclesHasMore,
    addPeople, setPeopleNextPage, setPeopleHasMore,
    addFilms, setFilmsNextPage, setFilmsHasMore,
    addSpecies, setSpeciesNextPage, setSpeciesHasMore,
 } from '~/utils/store'

const getPlanets = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/planets/?page=${page}`)
        setPlanetsHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
        });
        setPlanetsNextPage(newData.next)
        addPlanets(newData.results.filter(result => result.name !== "unknown"))
        return true
    }
    catch(e) {
        console.log('error', e)
        return false
    }
}

const getSpaceShips = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/starships/?page=${page}`)
        setSpaceShipsHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
        });
        setSpaceShipsNextPage(newData.next)
        addSpaceShips(newData.results)
        return true
    }
    catch(e) {
        console.log('error', e)
        return false
    }
}

const getVehicles = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/vehicles/?page=${page}`)
        setVehiclesHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
        });
        setVehiclesNextPage(newData.next)
        addVehicles(newData.results)
        return true
    }
    catch(e) {
        console.log('error', e)
        return false
    }
}

const getPeople = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/people/?page=${page}`)
        setPeopleHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
        });
        setPeopleNextPage(newData.next)
        addPeople(newData.results)
        return true
    }
    catch(e) {
        console.log('error', e)
        return false
    }
}

const getFilms = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/films/?page=${page}`)
        setFilmsHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
        });
        setFilmsNextPage(newData.next)
        addFilms(newData.results)
        return true
    }
    catch(e) {
        console.log('error', e)
        return false
    }
}

const getSpecies = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/species/?page=${page}`)
        setSpeciesHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
        });
        setSpeciesNextPage(newData.next)
        addSpecies(newData.results)
        return true
    }
    catch(e) {
        console.log('error', e)
        return false
    }
}

export { getPlanets, getSpaceShips, getVehicles, getPeople, getFilms, getSpecies }