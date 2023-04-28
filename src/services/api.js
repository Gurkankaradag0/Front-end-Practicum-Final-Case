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

const getDetail = async (category, id) => {
    try {
        const type = category === "races" ? "species" : category === "characters" ? "people" : category === "ships" ? "starships" : category
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/${type}/${id}`)
        const newData = { ...data }
        delete newData.url
        const url = data.url.split('/')
        newData.id = parseInt(url[url.length - 2])
        newData.image = imageData[category].find(result => result.name === (category === "films" ? data.title : data.name))?.image

        const homeworld = data?.homeworld?.split('/')
        homeworld && (newData.homeworld = parseInt(homeworld[homeworld.length - 2]))
        data?.homeworld === null && (newData.homeworld = false)

        const residents = data?.residents?.map(resident => {
            const url = resident.split('/')
            return parseInt(url[url.length - 2])
        })
        residents && (newData.residents = residents)

        const people = data?.people?.map(human => {
            const url = human.split('/')
            return parseInt(url[url.length - 2])
        })
        people && (newData.people = people)

        const films = data?.films?.map(film => {
            const url = film.split('/')
            return parseInt(url[url.length - 2])
        })
        films && (newData.films = films)

        const pilots = data?.pilots?.map(pilot => {
            const url = pilot.split('/')
            return parseInt(url[url.length - 2])
        })
        pilots && (newData.pilots = pilots)

        const vehicles = data?.vehicles?.map(vehicle => {
            const url = vehicle.split('/')
            return parseInt(url[url.length - 2])
        })
        vehicles && (newData.vehicles = vehicles)

        const starships = data?.starships?.map(ship => {
            const url = ship.split('/')
            return parseInt(url[url.length - 2])
        })
        starships && (newData.starships = starships)

        const characters = data?.characters?.map(character => {
            const url = character.split('/')
            return parseInt(url[url.length - 2])
        })
        characters && (newData.characters = characters)

        const planets = data?.planets?.map(planet => {
            const url = planet.split('/')
            return parseInt(url[url.length - 2])
        })
        planets && (newData.planets = planets)

        const species = data?.species?.map(race => {
            const url = race.split('/')
            return parseInt(url[url.length - 2])
        })
        species && (newData.species = species)
        
        return newData
    }
    catch(e) {
        console.log('error', e)
        return false
    }
}

const getPlanets = async (page = 1) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/planets/?page=${page}`)
        setPlanetsHasMore(data.next ? true : false)
        const newData = { ...data, next: data.next ? parseInt(data.next.split('=')[1]) : null, previous: data.previous ? parseInt(data.previous.split('=')[1]) : null }
        data.results.forEach((element, index) => {
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].image = imageData.planets.find(planet => planet.name === element.name)?.image

            const residents = []
            element.residents.forEach(resident => {
                const url = resident.split('/')
                residents.push(parseInt(url[url.length - 2]))
            })

            const films = []
            element.films.forEach(film => {
                const url = film.split('/')
                films.push(parseInt(url[url.length - 2]))
            })

            newData.results[index].residents = residents
            newData.results[index].films = films
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
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].image = imageData.ships.find(ship => ship.name === element.name)?.image

            const pilots = []
            element.pilots.forEach(pilot => {
                const url = pilot.split('/')
                pilots.push(parseInt(url[url.length - 2]))
            })

            const films = []
            element.films.forEach(film => {
                const url = film.split('/')
                films.push(parseInt(url[url.length - 2]))
            })

            newData.results[index].pilots = pilots
            newData.results[index].films = films
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
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].image = imageData.vehicles.find(vehicle => vehicle.name === element.name)?.image

            const pilots = []
            element.pilots.forEach(pilot => {
                const url = pilot.split('/')
                pilots.push(parseInt(url[url.length - 2]))
            })

            const films = []
            element.films.forEach(film => {
                const url = film.split('/')
                films.push(parseInt(url[url.length - 2]))
            })

            newData.results[index].pilots = pilots
            newData.results[index].films = films
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
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].image = imageData.characters.find(character => character.name === element.name)?.image

            const homeworld = element.homeworld.split('/')

            const films = []
            element.films.forEach(film => {
                const url = film.split('/')
                films.push(parseInt(url[url.length - 2]))
            })

            const species = []
            element.species.forEach(race => {
                const url = race.split('/')
                species.push(parseInt(url[url.length - 2]))
            })

            const vehicles = []
            element.vehicles.forEach(vehicle => {
                const url = vehicle.split('/')
                vehicles.push(parseInt(url[url.length - 2]))
            })

            const starships = []
            element.starships.forEach(ship => {
                const url = ship.split('/')
                starships.push(parseInt(url[url.length - 2]))
            })

            newData.results[index].homeworld = parseInt(homeworld[homeworld.length - 2])
            newData.results[index].species = species
            newData.results[index].films = films
            newData.results[index].vehicles = vehicles
            newData.results[index].starships = starships
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
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].image = imageData.films.find(film => film.name === element.title)?.image

            const characters = []
            element.characters.forEach(character => {
                const url = character.split('/')
                characters.push(parseInt(url[url.length - 2]))
            })

            const planets = []
            element.planets.forEach(planet => {
                const url = planet.split('/')
                planets.push(parseInt(url[url.length - 2]))
            })

            const species = []
            element.species.forEach(race => {
                const url = race.split('/')
                species.push(parseInt(url[url.length - 2]))
            })

            const vehicles = []
            element.vehicles.forEach(vehicle => {
                const url = vehicle.split('/')
                vehicles.push(parseInt(url[url.length - 2]))
            })

            const starships = []
            element.starships.forEach(ship => {
                const url = ship.split('/')
                starships.push(parseInt(url[url.length - 2]))
            })

            newData.results[index].species = species
            newData.results[index].characters = characters
            newData.results[index].planets = planets
            newData.results[index].vehicles = vehicles
            newData.results[index].starships = starships
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
            const url = element.url.split('/')
            newData.results[index].id = parseInt(url[url.length - 2])
            newData.results[index].image = imageData.races.find(race => race.name === element.name)?.image

            const homeworld = element.homeworld ? element.homeworld.split('/') : element.homeworld

            const films = []
            element.films.forEach(film => {
                const url = film.split('/')
                films.push(parseInt(url[url.length - 2]))
            })

            const people = []
            element.people.forEach(character => {
                const url = character.split('/')
                people.push(parseInt(url[url.length - 2]))
            })

            newData.results[index].homeworld = homeworld ? parseInt(homeworld[homeworld.length - 2]) : homeworld
            newData.results[index].people = people
            newData.results[index].films = films
        })
        setRacesNextPage(newData.next)
        addRaces(newData.results)
        return true
    }
    catch(e) {
        return false
    }
}

export { getDetail, getPlanets, getShips, getVehicles, getCharacters, getFilms, getRaces }