import Link from "next/link"
import Image from "next/image"
const Header = () => {
  return (
    <div className="w-full h-[85px]">
              <div className="w-[1300px] mx-auto flex justify-between items-center">
                          <Link  href={'/'}>
                                     <div className="w-[180px] h-[80px]  flex items-center gap-1">
                                               <Image src='/logo.png' width={45} height={45} alt="logo" />
                                               <h1 className="font-primary text-3xl font-">Lively</h1>
                                     </div>
                          </Link>
                          <nav>
                                    <ul className="flex gap-8">
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Home</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600" >Product</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Solutions</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Pricing</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Company</Link></li>
                                            <li><Link href={'/'} className="font-primary font-semibold text-[15px] text-gray-600">Resources</Link></li>
                                    </ul>
                          </nav>
                          <div className="">
                                    <Link href={'/'}>Sign In</Link>
                                    <Link href={'/'}>Sign Up</Link>
                          </div>
              </div>
    </div>
  )
}

export default Header