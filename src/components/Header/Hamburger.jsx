import classNames from "classnames"

function Hamburger({isOpen, setOpen, setClose}) {

    const navbarHandle = () => {
        isOpen && setClose()
        !isOpen && setOpen()
    }

    return (
        <div className="w-[112.6px]">
            <div 
                className="w-[50px] h-[50px] cursor-pointer overflow-hidden group relative opacity-0 max-[960px]:opacity-100 min-[960px]:pointer-events-none"
                onClick={navbarHandle}
            >
                <div className={classNames({
                    "block absolute left-1/2 h-[10%] w-[70%] origin-[50%_50%] transition-bun-filling before:content-[''] before:block before:h-[40%] before:bg-white before:absolute before:top-1/2 before:translate-0-45 before:transition-before-after after:content-[''] after:block after:h-[40%] after:bg-white after:absolute after:top-1/2 after:translate-0-45 after:transition-before-after before:left-0 before:w-[calc(-1px_+_75%)] before:rounded-[10px_0px_0px_10px] after:right-0 after:w-[calc(-1px_+_25%)] group-hover:before:bg-[#fee] group-hover:before:shadow-bun-top": true,
                    "rotate-bun top-1/4": !isOpen,
                    "rotate-bun-top-active rounded-[3px] top-1/2 transition-bun-active": isOpen
                })}></div>
                <div className={classNames({
                    "block absolute left-1/2 h-[10%] w-[70%] origin-[50%_50%] transition-bun-filling before:content-[''] before:block before:h-[40%] before:bg-white before:absolute before:top-1/2 before:translate-0-45 before:transition-before-after after:content-[''] after:block after:h-[40%] after:bg-white after:absolute after:top-1/2 after:translate-0-45 after:transition-before-after before:left-0 before:w-[calc(-1px_+_75%)] before:rounded-[10px_0px_0px_10px] after:right-0 after:w-[calc(-1px_+_25%)] group-hover:after:bg-[#efe] top-1/2 group-hover:before:shadow-filling":true,
                    "animate-filling-in rotate-filling-active": isOpen,
                    "animate-filling-out rotate-filling": !isOpen
                })}></div>
                <div className={classNames({
                    "block absolute left-1/2 h-[10%] w-[70%] origin-[50%_50%] transition-bun-filling before:content-[''] before:block before:h-[40%] before:bg-white before:absolute before:top-1/2 before:translate-0-45 before:transition-before-after after:content-[''] after:block after:h-[40%] after:bg-white after:absolute after:top-1/2 after:translate-0-45 after:transition-before-after before:left-0 before:w-[calc(-1px_+_75%)] before:rounded-[10px_0px_0px_10px] after:right-0 after:w-[calc(-1px_+_25%)] group-hover:before:bg-[#dff] group-hover:before:shadow-bun-bottom": true,
                    "rotate-bun top-3/4": !isOpen,
                    'rotate-bun-bottom-active rounded-[3px] top-1/2 transition-bun-active': isOpen,
                })}></div>
            </div>
        </div>
    )
}

export default Hamburger