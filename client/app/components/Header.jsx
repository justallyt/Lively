"use client"
import Link from "next/link"
import Image from "next/image"
import { useContext } from "react"
import { CgMenuRight } from "react-icons/cg"
import { navcontext } from "../utils/navcontext"
const Header = () => {
  const [status, setStatus] = useContext(navcontext)

  const openSidebar = () => setStatus(!status);
  return (
    
    <div className="w-full h-[85px]">
              <div className="w-[90%] xl:w-[80%] mx-auto flex justify-between items-center">
                          <Link  href={'/'}>
                                     <div className="w-[180px] h-[80px]  flex items-center gap-1">
                                               <Image src='/logo.png' width={45} height={45} alt="logo" />
                                               <h1 className="font-primary text-3xl font-">Lively</h1>
                                     </div>
                          </Link>
                          <nav>
                                    <ul className="hidden lg:flex gap-8">
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Home</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600" >Product</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Solutions</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Pricing</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Company</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Resources</Link></li>
                                    </ul>
                          </nav>
                          <div className="hidden lg:flex gap-6">
                                    <Link href={'/'} className="w-[120px] h-[45px] flex justify-center items-center text-sm font-primary font-semibold rounded-lg text-indigo-400 border-2 border-solid border-indigo-400">Sign In</Link>
                                    <Link href={'/'} className="w-[120px] h-[45px] flex justify-center items-center text-sm font-primary font-semibold rounded-lg bg-indigo-500 text-white">Sign Up</Link>
                          </div>
                          <span className="lg:hidden absolute right-10 cursor-pointer w-[40px] h-[40px] flex items-center justify-center bg-indigo-500 rounded-md text-white text-2xl" onClick={openSidebar}>
                                 <CgMenuRight />
                         </span>
              </div>
    </div>
  )
}

export default Header