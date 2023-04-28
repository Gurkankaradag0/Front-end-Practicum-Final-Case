import imageData from '~/data'

const manipulate = (data, category) => {
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

export { manipulate }