import axios from 'axios'
import imageData from '~/data'
import { 
    addPlanets, setPlanetsNextPage, setPlanetsHasMore,
    addShips, setShipsNextPage, setShipsHasMore,
    addVehicles, setVehiclesNextPage, setVehiclesHasMore,
    addCharacters, setCharactersNextPage, setCharactersHasMore,
    addFilms, setFilmsNextPage, setFilmsHasMore,
    addRaces, setRacesNextPage, setRacesHasMore,
 } from '~/utils/store'

const getPlanets = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/planets/?page=${page}`)
        setPlanetsHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].image = imageData.planets.find(planet => planet.name === element.name)?.image
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

const getShips = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/starships/?page=${page}`)
        setShipsHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].image = imageData.ships.find(ship => ship.name === element.name)?.image
        });
        setShipsNextPage(newData.next)
        addShips(newData.results)
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
            newData.results[index].image = imageData.vehicles.find(vehicle => vehicle.name === element.name)?.image
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

const getCharacters = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/people/?page=${page}`)
        setCharactersHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].image = imageData.characters.find(character => character.name === element.name)?.image
        });
        setCharactersNextPage(newData.next)
        addCharacters(newData.results)
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
            newData.results[index].image = imageData.films.find(film => film.name === element.title)?.image
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

const getRaces = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/species/?page=${page}`)
        setRacesHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].image = imageData.races.find(race => race.name === element.name)?.image
        });
        setRacesNextPage(newData.next)
        addRaces(newData.results)
        return true
    }
    catch(e) {
        console.log('error', e)
        return false
    }
}

export { getPlanets, getShips, getVehicles, getCharacters, getFilms, getRaces }