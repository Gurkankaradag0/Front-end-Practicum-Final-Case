import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { useWindowSize } from 'react-use'
import { useNavbar, setClose } from '~/utils/store'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Header/Navbar'
import ScrollToTop from './ScrollToTop'

const Layout = () => {
    const { width } = useWindowSize()
    const { isOpen } = useNavbar()
    const headerRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <Header ref={headerRef} />
            <ScrollToTop />
            <div onClick={() => isOpen && setClose()} className="flex min-h-[80%]">
                <div className={`${isOpen ? 'pointer-events-none opacity-50 ' : ''}flex flex-1 flex-col`}>
                    <main className="flex-1">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
            {width <= 960 && isOpen && <Navbar headerRef={headerRef} />}
        </>
    )
}

export default Layout
