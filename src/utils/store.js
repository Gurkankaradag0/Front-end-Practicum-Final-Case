import { useSelector } from "react-redux"
import store from "~/store"

import { _setOpen, _setClose } from "~/store/navbar"

import { _addPlanets, _setPlanetsNextPage, _setPlanetsHasMore } from "~/store/planets"
import { _addSpaceShips, _setSpaceShipsNextPage, _setSpaceShipsHasMore } from "~/store/spaceShips"
import { _addVehicles, _setVehiclesNextPage, _setVehiclesHasMore } from "~/store/vehicles"
import { _addPeople, _setPeopleNextPage, _setPeopleHasMore } from "~/store/people"
import { _addFilms, _setFilmsNextPage, _setFilmsHasMore } from "~/store/films"
import { _addSpecies, _setSpeciesNextPage, _setSpeciesHasMore } from "~/store/species"

// Navbar
export const useNavbar = () => useSelector(state => state.navbar)
export const setOpen = () => store.dispatch(_setOpen())
export const setClose = () => store.dispatch(_setClose())

// Planets
export const usePlanets = () => useSelector(state => state.planets)
export const usePlanet = id => useSelector(state => state.planets.results.filter(planet => planet.id === id)[0])
export const addPlanets = planets => store.dispatch(_addPlanets(planets))

export const setPlanetsNextPage = page => store.dispatch(_setPlanetsNextPage(page))
export const setPlanetsHasMore = hasMore => store.dispatch(_setPlanetsHasMore(hasMore))

// SpaceShips
export const useSpaceShips = () => useSelector(state => state.spaceShips)
export const useSpaceShip = id => useSelector(state => state.spaceShips.results.filter(spaceShip => spaceShip.id === id)[0])
export const addSpaceShips = spaceShips => store.dispatch(_addSpaceShips(spaceShips))

export const setSpaceShipsNextPage = page => store.dispatch(_setSpaceShipsNextPage(page))
export const setSpaceShipsHasMore = hasMore => store.dispatch(_setSpaceShipsHasMore(hasMore))

// Vehicles
export const useVehicles = () => useSelector(state => state.vehicles)
export const useVehicle = id => useSelector(state => state.vehicles.results.filter(vehicle => vehicle.id === id)[0])
export const addVehicles = vehicles => store.dispatch(_addVehicles(vehicles))

export const setVehiclesNextPage = page => store.dispatch(_setVehiclesNextPage(page))
export const setVehiclesHasMore = hasMore => store.dispatch(_setVehiclesHasMore(hasMore))

// People
export const usePeople = () => useSelector(state => state.people)
export const usePerson = id => useSelector(state => state.people.results.filter(person => person.id === id)[0])
export const addPeople = people => store.dispatch(_addPeople(people))

export const setPeopleNextPage = page => store.dispatch(_setPeopleNextPage(page))
export const setPeopleHasMore = hasMore => store.dispatch(_setPeopleHasMore(hasMore))

// Films
export const useFilms = () => useSelector(state => state.films)
export const useFilm = id => useSelector(state => state.films.results.filter(film => film.id === id)[0])
export const addFilms = films => store.dispatch(_addFilms(films))

export const setFilmsNextPage = page => store.dispatch(_setFilmsNextPage(page))
export const setFilmsHasMore = hasMore => store.dispatch(_setFilmsHasMore(hasMore))

// Species
export const useSpecies = () => useSelector(state => state.species)
export const useSpecies_ = id => useSelector(state => state.species.results.filter(species => species.id === id)[0])
export const addSpecies = species => store.dispatch(_addSpecies(species))

export const setSpeciesNextPage = page => store.dispatch(_setSpeciesNextPage(page))
export const setSpeciesHasMore = hasMore => store.dispatch(_setSpeciesHasMore(hasMore))