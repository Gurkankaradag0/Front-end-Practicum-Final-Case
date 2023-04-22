import items from "./items"
import classNames from "classnames"
import { NavLink } from "react-router-dom"

function NavbarRow() {
    return (
        <ul className="flex mx-auto shrink-0 items-stretch max-[960px]:hidden">
            {
                items.map((item, index) => (
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
                ))
            }
        </ul>
    )
}

export default NavbarRow