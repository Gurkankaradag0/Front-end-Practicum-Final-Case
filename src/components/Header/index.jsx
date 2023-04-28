import { Icon } from "~/Icons"
import { Link } from "react-router-dom"
import { useWindowSize } from "react-use"
import { useEffect, forwardRef, useState } from "react"

import { useNavbar, setOpen, setClose } from "~/utils/store"
import Hamburger from "./Hamburger"
import SearchInput from "./SearchInput"
import NavbarRow from "./NavbarRow"

function Header(props, ref) {
  const { width } = useWindowSize()
  const { isOpen } = useNavbar()

  const [inputFocus, setInputFocus] = useState(false)
  
  useEffect(() => {
    (width > 960 && isOpen) && setClose()
  }, [width])
  return (
    <div 
      className="flex flex-col justify-center p-4 items-center border-b border-solid border-white/25 h-1/5"
      onClick={() => isOpen && setClose()}
      ref={ref}
    >
      <div className="flex justify-between items-center w-full">
        {
          !(width <= 960 && inputFocus) &&
          <>
            <Hamburger isOpen={isOpen} setOpen={setOpen} setClose={setClose} />
            <Link to="/">
              <span className="text-yellow-300"><Icon name="logo" size={100} /></span>
            </Link>
          </>
        }
        <SearchInput setInputFocus={setInputFocus} />
      </div>
      <NavbarRow />
    </div>
    
  )
}

export default forwardRef(Header)