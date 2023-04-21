import { NavLink } from 'react-router-dom'
import { setClose } from '~/utils/store'
import classNames from 'classnames'

import items from "./items"
import { useEffect } from 'react'
import { useWindowSize } from 'react-use'

function Navbar({headerRef}) {

    const { height: windowH } = useWindowSize()
    const { bottom } = headerRef.current.getBoundingClientRect()

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => {
            document.body.removeAttribute('class')
        }
    }, [])

    return (
        <div 
            className="bg-black fixed left-0 bottom-0 w-3/4 pl-4 py-8 z-50"
            style={{
                height: windowH - bottom
            }}
        >
            <ul className="flex flex-col">
                {
                    items.map((item, index) => (
                        <li 
                            className="uppercase w-full text-xl" 
                            key={index}
                        >
                            <NavLink
                                to={`/${item.title}`}
                                className={({ isActive }) =>
                                    classNames({
                                        "flex items-center py-2 pl-4": true,
                                        "text-white/80 hover:text-white": !isActive,
                                        "text-white before:content-[''] before:h-6 before:w-[2px] before:bg-white before:shadow-[0px_0px_4px_1px_#FADE48] before:rounded before:absolute before:-my-[2px] before:-mx-2": isActive
                                    })
                                }
                                onClick={() => setClose()}
                            >
                                {
                                    item.title
                                }
                            </NavLink>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Navbar