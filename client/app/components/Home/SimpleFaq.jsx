"use client"
import { useState } from "react"
import { BsChevronDown} from "react-icons/bs"

const SimpleFaq = ({ data }) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
            setActive(!active)
    }
  return (
    <div className="w-full lg:w-4/5 border mb-5 rounded-lg cursor-pointer">
            <div className="flex justify-between items-center p-5" onClick={handleClick}>
                      <h3 className="font-semiboldish text-lg">{data.feature}</h3>
                      <span className={active ? "text-slate-500 rotate-180 transition duration-600 ease-linear" : 'text-slate-500 transition duration-600 ease-linear'}><BsChevronDown /></span>
            </div>
            <div className={active ? "max-h-40 overflow-hidden  transition duration-1000 ease-linear" : "max-h-0 overflow-hidden  transition duration-1000 ease-linear"}>
                    <div className="px-5 pb-6">
                              <p className="text-slate-900">{data.description}</p>
                    </div>
            </div>
    </div>
  )
}

export default SimpleFaq