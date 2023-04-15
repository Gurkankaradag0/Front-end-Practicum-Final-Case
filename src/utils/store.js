import { useSelector } from "react-redux"
import store from "~/store"
import { _setLoading, _addShips, _setCurrentPage, _setNextPage, _setPreviousPage } from "~/store/ships"

export const useLoading = () => useSelector(state => state.ships.loading)
export const setLoading = status => store.dispatch(_setLoading(status))

export const useShips = () => useSelector(state => state.ships.ships)
export const useShip = id => useSelector(state => state.ships.ships.filter(ship => ship.id === id)[0])
export const addShips = ships => store.dispatch(_addShips(ships))

export const usePage = () => useSelector(state => state.ships.currentPage)
export const setPage = page => store.dispatch(_setCurrentPage(page))

export const useNextPage = () => useSelector(state => state.ships.nextPage)
export const setNextPage = page => store.dispatch(_setNextPage(page))

export const usePreviousPage = () => useSelector(state => state.ships.previousPage)
export const setPreviousPage = page => store.dispatch(_setPreviousPage(page))