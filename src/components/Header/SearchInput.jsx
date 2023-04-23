import classNames from "classnames"
import { useEffect } from "react"
import { useState } from "react"
import { Icon } from "~/Icons"
import { useWindowSize } from "react-use"
import { useRef } from "react"

function SearchInput({setInputFocus}) {
    const { width } = useWindowSize()
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState('')
    const ref = useRef()
    const submitHandle = (e) => {
        e.preventDefault()

        //TODO 

        setFocus(false)
        setValue('')
    }
    const resetHandle = () => {
        setFocus(false)
        setValue('')
    }
    useEffect(() => {
        setInputFocus(focus)
        ref.current.focus()
    }, [focus])
    return (
        <>
            <div className={`${(width <= 960 && focus) ? "hidden" : "w-[112.6px] inline-block"}`}></div>
            <form 
                className={classNames({
                    "justify-center items-center z-10 absolute right-4": true,
                    "inline-flex transition-all duration-300": focus,
                    "w-[unset] h-12": width > 960,
                    "z-20 p-0 h-12 min-w-[unset]": width <= 960,
                    "w-[unset] flex mr-2": width <= 960 && !focus,
                    "mr-2": width > 960 && !focus,
                    "w-full !relative !right-0": width <= 960 && focus,
                })}
                onSubmit={submitHandle}
            >
                <div 
                    className={classNames({
                        "w-[unset] border-none flex h-full overflow-hidden group cursor-pointer": true,
                        "flex-1 !border !border-solid !rounded !border-white": focus,
                        "rounded-[3px]": width <= 960 && !focus,
                    })}
                    onClick={() => {!focus && setFocus(true)}}
                >
                    <button 
                        type="button"
                        className={`mx-2 h-12 flex justify-center items-center${!focus ? " text-white/75 group-hover:text-white" : ""}`}
                    >
                        <Icon name="search" />
                    </button>
                    <p 
                        className={`${(focus || width < 512) ? "hidden" : "uppercase font-bold m-auto text-white/75 group-hover:text-white"}`}
                    >Search</p>
                    <input 
                        className={classNames({
                            "font-semibold h-full p-[6px_40px_6px_0] bg-black outline-none": true,
                            "hidden": !focus,
                            "w-full": width <= 960 && focus

                        })}
                        ref={ref}
                        placeholder="Search..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <button 
                    onClick={resetHandle}
                    type="button"
                    className={classNames({
                        'hidden': !focus,
                        'bg-transparent border-none absolute right-2': focus
                    })} 
                >
                    <div className="w-10 h-10 overflow-hidden relative group">
                        <div className={classNames({
                            "block absolute left-1/2 h-[10%] w-[70%] origin-[50%_50%] transition-bun-filling before:content-[''] before:block before:h-[40%] before:bg-white before:absolute before:top-1/2 before:translate-0-45 before:transition-before-after after:content-[''] after:block after:h-[40%] after:bg-white after:absolute after:top-1/2 after:translate-0-45 after:transition-before-after before:left-0 before:w-[calc(-1px_+_75%)] before:rounded-[10px_0px_0px_10px] after:right-0 after:w-[calc(-1px_+_25%)] group-hover:before:bg-[#fee] group-hover:before:shadow-bun-top": true,
                            "rotate-bun-top-active rounded-[3px] top-1/2 transition-bun-active": true
                        })}></div>
                        <div className={classNames({
                            "block absolute left-1/2 h-[10%] w-[70%] origin-[50%_50%] transition-bun-filling before:content-[''] before:block before:h-[40%] before:bg-white before:absolute before:top-1/2 before:translate-0-45 before:transition-before-after after:content-[''] after:block after:h-[40%] after:bg-white after:absolute after:top-1/2 after:translate-0-45 after:transition-before-after before:left-0 before:w-[calc(-1px_+_75%)] before:rounded-[10px_0px_0px_10px] after:right-0 after:w-[calc(-1px_+_25%)] group-hover:before:bg-[#dff] group-hover:before:shadow-bun-bottom": true,
                            'rotate-bun-bottom-active rounded-[3px] top-1/2 transition-bun-active': true
                        })}></div>
                    </div>
                </button>
            </form>
        </>
    )
}

export default SearchInput