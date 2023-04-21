import { Icon } from "~/Icons"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useWindowSize } from "react-use"
import { useEffect, forwardRef } from "react"

import classNames from "classnames"
import items from "./items"
import { useNavbar, setOpen, setClose } from "~/utils/store"
import Hamburger from "./Hamburger"

function Header(props, ref) {
  const { width } = useWindowSize()
  const { isOpen } = useNavbar()
  
  useEffect(() => {
    (width > 768 && isOpen) && setClose()
  }, [width])
  return (
    <div 
      className="flex flex-col justify-between p-4 items-center border-b border-solid border-white/25 max-[768px]:flex-row max-[768px]:justify-between h-1/5"
      onClick={() => isOpen && setClose()}
      ref={ref}
    >
      {
        width <= 768 && (
          <Hamburger isOpen={isOpen} setOpen={setOpen} setClose={setClose} />
        )
      }
      <Link to="/">
        <span className="text-yellow-300"><Icon name="logo" size={100} /></span>
      </Link>
      {
        width > 768 ? (
          <ul className="flex mx-auto shrink-0 items-stretch">
            {
              items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="border-none relative float-left min-w-[72px] min-h-full inline-block shrink-0"
                  >
                    <NavLink
                      to={`/${item.title}`}
                      className={({ isActive }) =>
                        classNames({
                          "flex flex-col items-center justify-center h-full min-h-[44px] text-center uppercase box-border px-4": true,
                          "text-white/80 hover:text-white": !isActive,
                          "text-white after:content-[''] after:bg-white after:block after:w-full after:h-[2px] after:transition-all after:duration-200 after:shadow-[0px_0px_4px_1px_#FADE48] after:rounded": isActive
                        })
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        ) : (
          <div className="w-[50px] h-[50px] cursor-pointer overflow-hidden flex justify-center items-center font-light">
            <Icon name="search" />
          </div>
        )
      }
    </div>
  )
}

export default forwardRef(Header)