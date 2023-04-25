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
        <div onClick={() => setClose()} className="flex min-h-[80%]">
          <div className={`${isOpen ? 'pointer-events-none opacity-50 ' : ''}flex flex-1 flex-col`}>
            <div className="flex-1"><Outlet /></div>
            <Footer />
          </div>
        </div>
        {
          (width <= 960 && isOpen) && (
            <Navbar headerRef={headerRef} />
          )
        }
    </>
  )
}

export default Layout