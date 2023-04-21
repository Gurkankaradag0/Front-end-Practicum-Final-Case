import { useState } from "react"
import classNames from "classnames"

function Loader() {
    const [checked, setChecked] = useState(true)
    const [hover, setHover] = useState(false)
    return (
        <div className="flex justify-center items-center mb-6 absolute bottom-0 w-full">
            <div className="-rotate-90-x-180">
                <div className="gradient" id="saberShawdow" />
                <div className="relative">
                    <label 
                        htmlFor="saberInput"
                        className="cursor-pointer absolute bottom-0 left-0 z-[88] indent-[-9999px] w-[15px] h-[50px] border-b-4 border-solid border-gray-500 border-t-[5px] rounded-[5px] bg-gradient-to-r from-label-from via-label-via to-label-to"
                     />
                    <input 
                        id="saberInput"
                        type="checkbox" 
                        checked={checked} 
                        onChange={() => setChecked(!checked)}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="absolute bottom-0 left-0 opacity-0 z-50"
                    />
                    <div className={classNames({
                        "w-[5px] h-[10px] block absolute bottom-[25px] transition-[left] duration-200 rounded-[10px]": true,
                        "bg-switch-default left-[13px]": !checked && !hover,
                        "bg-switch-checked left-[13px]": checked && !hover,
                        "bg-switch-hover left-[12px]": hover,
                    })} />
                    <div className={classNames({
                        "transition-[height] duration-300 rounded-tl-[12px] rounded-tr-[12px] absolute bottom-[55px] left-[2px] w-[10px] block blur-[1px] bg-gradient-to-r from-yoda-from via-yoda-via to-yoda-to animate-yoda": true,
                        "h-0": !checked,
                        "h-[250px]": checked
                    })} />
                </div>
            </div>
        </div>
    )
}

export default Loader