"use client"
import Link from "next/link"
import Image from "next/image"
import {VscClose } from "react-icons/vsc"
import { useContext } from "react"
import { navcontext } from "../utils/navcontext"
const Sidebar = () => {
    const [status, setStatus] = useContext(navcontext)

    const removeSidebar = () => setStatus(!status)
  return (
    <div className={ status ? "z-20 w-[500px] bg-white fixed left-0 top-0 bottom-0 border-r translate-x-0 transition-all " : "w-[500px] bg-white fixed left-0 top-0 bottom-0 border-r -translate-x-full translate-all"}>
              <div className="p-5">
                           <div className="flex justify-between items-center mb-4 pb-4 border-b">
                                     <Link  href={'/'}>
                                               <div className="w-[180px] h-[80px]  flex items-center gap-1">
                                                         <Image src='/logo.png' width={45} height={45} alt="logo" />
                                                         <h1 className="font-primary text-3xl font-">Lively</h1>
                                               </div>
                                    </Link>
                                    <span className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-indigo-500 rounded-md text-white text-2xl" onClick={removeSidebar}>
                                              <VscClose />
                                    </span>
                           </div>
                           <nav>
                                     <ul className="flex gap-8 flex-col">
                                             <li><Link href={'/'} className="font-primary font-semibold text-[16px] text-gray-600">Home</Link></li>
                                             <li><Link href={'/'} className="font-primary font-semibold text-[16px] text-gray-600" >Product</Link></li>
                                             <li><Link href={'/'} className="font-primary font-semibold text-[16px] text-gray-600">Solutions</Link></li>
                                             <li><Link href={'/'} className="font-primary font-semibold text-[16px] text-gray-600">Pricing</Link></li>
                                             <li><Link href={'/'} className="font-primary font-semibold text-[16px] text-gray-600">Company</Link></li>
                                              <li><Link href={'/'} className="font-primary font-semibold text-[16px] text-gray-600">Resources</Link></li>
                                   </ul>

                                   <div className="flex gap-6 mt-7">
                                           <Link href={'/'} className="w-[120px] h-[45px] flex justify-center items-center text-sm font-primary font-semibold rounded-lg text-indigo-400 border-2 border-solid border-indigo-400">Sign In</Link>
                                            <Link href={'/'} className="w-[120px] h-[45px] flex justify-center items-center text-sm font-primary font-semibold rounded-lg bg-indigo-500 text-white">Sign Up</Link>
                                  </div>
                          </nav>
              </div>
              
    </div>
  )
}

export default Sidebar