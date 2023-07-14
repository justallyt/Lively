"use client"
import Link from "next/link"
import Image from "next/image"
import { useContext, useState } from "react"
import { CgMenuRight } from "react-icons/cg"
import { navcontext } from "../utils/navcontext"
const ScrolledHeader = () => {
    const [scrollStatus, setScrollStatus]  = useState(false);
   const [ navStatus, setNavStatus ] = useContext(navcontext)
    window.addEventListener("scroll", () => {
           if(window.scrollY > 100){
                   setScrollStatus(true)
           }else{
                   setScrollStatus(false)
           }
    })
    const openSidebar = () => setNavStatus(!navStatus);
     return (
         <div className={scrollStatus ? "z-10 w-full h-[80px] bg-white fixed top-0  shadow-[0_2px_2px_-2px_rgb(180,180,180)] translate-y-0" : "-translate-y-full w-full h-[80px] bg-indigo-50 transition-all fixed top-0"}>
              <div className="w-[90%] xl:w-[80%] mx-auto flex justify-between items-center relative">
                          <Link  href={'/'}>
                                     <div className="w-[180px] h-[80px]  flex items-center gap-1">
                                               <Image src='/logo.png' width={45} height={45} alt="logo" />
                                               <h1 className="font-primary text-3xl font-">Lively</h1>
                                     </div>
                          </Link>
                          <nav className="hidden lg:block">
                                    <ul className="flex gap-8">
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Home</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600" >Product</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Solutions</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Pricing</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Company</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Resources</Link></li>
                                    </ul>
                          </nav>
                          <div className="gap-6 hidden lg:flex">
                                    <Link href={'/'} className="w-[120px] h-[45px] flex justify-center items-center text-sm font-primary font-semibold rounded-lg text-indigo-400 border-2 border-solid border-indigo-400">Sign In</Link>
                                    <Link href={'/'} className="w-[120px] h-[45px] flex justify-center items-center text-sm font-primary font-semibold rounded-lg bg-indigo-500 text-white">Sign Up</Link>
                          </div>
                          <span className="lg:hidden absolute right-0 cursor-pointer w-[40px] h-[40px] flex items-center justify-center bg-indigo-500 rounded-md text-white text-2xl" onClick={openSidebar}>
                                 <CgMenuRight />
                         </span>
              </div>
    </div>
     )
}
export default ScrolledHeader