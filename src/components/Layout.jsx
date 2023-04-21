import { useRef } from "react"
import { Outlet } from "react-router-dom"
import { useWindowSize } from "react-use"
import { useNavbar, setClose } from "~/utils/store"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Header/Navbar"

function Layout() {
  const { width } = useWindowSize()
  const { isOpen } = useNavbar()
  const headerRef = useRef()
  return (
    <>
        <Header ref={headerRef} />
        <div onClick={() => setClose()}>
          <div className={isOpen ? 'pointer-events-none opacity-50' : ''}>
            <Outlet />
            <Footer />
          </div>
        </div>
        {
          (width <= 768 && isOpen) && (
            <Navbar headerRef={headerRef} />
          )
        }
    </>
  )
}

export default Layout