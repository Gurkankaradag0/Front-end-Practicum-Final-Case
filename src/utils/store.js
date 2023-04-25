import { useSelector } from "react-redux"
import store from "~/store"

import { _setOpen, _setClose } from "~/store/navbar"

import { _addPlanets, _setPlanetsNextPage, _setPlanetsHasMore } from "~/store/planets"
import { _addShips, _setShipsNextPage, _setShipsHasMore } from "~/store/ships"
import { _addVehicles, _setVehiclesNextPage, _setVehiclesHasMore } from "~/store/vehicles"
import { _addCharacters, _setCharactersNextPage, _setCharactersHasMore } from "~/store/characters"
import { _addFilms, _setFilmsNextPage, _setFilmsHasMore } from "~/store/films"
import { _addRaces, _setRacesNextPage, _setRacesHasMore } from "~/store/races"

// Navbar
export const useNavbar = () => useSelector(state => state.navbar)
export const setOpen = () => store.dispatch(_setOpen())
export const setClose = () => store.dispatch(_setClose())

// Detail Hook
export const useDetail = (category, id) => useSelector(state => state[category].results.find(result => result.id === id))

// Planets
export const usePlanets = () => useSelector(state => state.planets)
export const addPlanets = planets => store.dispatch(_addPlanets(planets))

export const setPlanetsNextPage = page => store.dispatch(_setPlanetsNextPage(page))
export const setPlanetsHasMore = hasMore => store.dispatch(_setPlanetsHasMore(hasMore))

// Ships
export const useShips = () => useSelector(state => state.ships)
export const addShips = ships => store.dispatch(_addShips(ships))

export const setShipsNextPage = page => store.dispatch(_setShipsNextPage(page))
export const setShipsHasMore = hasMore => store.dispatch(_setShipsHasMore(hasMore))

// Vehicles
export const useVehicles = () => useSelector(state => state.vehicles)
export const addVehicles = vehicles => store.dispatch(_addVehicles(vehicles))

export const setVehiclesNextPage = page => store.dispatch(_setVehiclesNextPage(page))
export const setVehiclesHasMore = hasMore => store.dispatch(_setVehiclesHasMore(hasMore))

// Characters
export const useCharacters = () => useSelector(state => state.characters)
export const addCharacters = characters => store.dispatch(_addCharacters(characters))

export const setCharactersNextPage = page => store.dispatch(_setCharactersNextPage(page))
export const setCharactersHasMore = hasMore => store.dispatch(_setCharactersHasMore(hasMore))

// Films
export const useFilms = () => useSelector(state => state.films)
export const addFilms = films => store.dispatch(_addFilms(films))

export const setFilmsNextPage = page => store.dispatch(_setFilmsNextPage(page))
export const setFilmsHasMore = hasMore => store.dispatch(_setFilmsHasMore(hasMore))

// Races
export const useRaces = () => useSelector(state => state.races)
export const addRaces = races => store.dispatch(_addRaces(races))

export const setRacesNextPage = page => store.dispatch(_setRacesNextPage(page))
export const setRacesHasMore = hasMore => store.dispatch(_setRacesHasMore(hasMore))