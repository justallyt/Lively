import Link from "next/link"
import Image from "next/image"
import { BsEnvelope, BsSlack,BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import {ImLinkedin } from "react-icons/im"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
              <div className="w-11/12 mx-auto py-20 border-t border-t-slate-100">
                          <div className="grid grid-cols-2">
                                  <div className="">
                                           <Link  href={'/'}>
                                              <div className="w-[180px] h-[80px]  flex items-center gap-1">
                                                        <Image src='/logo.png' width={45} height={45} alt="logo" />
                                                        <h1 className="font-primary text-3xl font-">Lively</h1>
                                              </div>
                                        </Link>
                                        <p className="w-3/5 mb-5">The fastest and simple way to generate growing business solutions with our products.</p>
                                        <div className="flex flex-col gap-5">
                                                  <p className="flex gap-2 items-center"><span><BsEnvelope /></span>hello@lively.com</p>
                                                  <p className="flex gap-2 items-center"><span><BsSlack /></span> Join our slack community</p>
                                        </div>
                                  </div>
                                  <div className="grid grid-cols-3">
                                            <div className="">
                                                      <h4 className="font-semiboldish mb-5">Product</h4>
                                                      <ul className="flex flex-col gap-5">
                                                               <li><Link href={'/'}>Platform</Link></li>
                                                               <li><Link href={'/'}>Pricing</Link></li>
                                                               <li><Link href={'/'}>Benefits</Link></li>
                                                               <li><Link href={'/'}>Features</Link></li>
                                                      </ul>
                                            </div>
                                             <div className="">
                                                       <h4 className="font-semiboldish mb-5">Company</h4>
                                                       <ul className="flex flex-col gap-5">
                                                                <li><Link href={'/'}>About</Link></li>
                                                                <li><Link href={'/'}>Pricing Policy</Link></li>
                                                                <li><Link href={'/'}>Terms & Conditions</Link></li>
                                                                <li><Link href={'/'}>Partners</Link></li>
                                                                <li><Link href={'/'}>Contact</Link></li>
                                                       </ul>
                                             </div>
                                            <div className="">
                                                        <h4 className="font-semiboldish mb-5">Resources</h4>
                                                        <ul className="flex flex-col gap-5">
                                                               <li><Link href={'/'}>Guides and resources</Link></li>
                                                               <li><Link href={'/'}>Blog</Link></li>
                                                               <li><Link href={'/'}>Tools</Link></li>
                                                               <li><Link href={'/'}>Support</Link></li>
                                                      </ul>
                                            </div>
                                  </div>
                          </div>
              </div>
              <div className="bg-indigo-950 py-6 px-10 flex justify-between">
                       <p className="text-neutral-50 text-sm font-primary">&copy; { new Date().getFullYear() } Lively. All Rights Reserved.</p>
                       <div className="">
                                <ul className="flex gap-8">
                                         <li><Link href={'/'} className="text-neutral-50"><FaFacebookF /></Link></li>
                                         <li><Link href={'/'} className="text-neutral-50"><BsTwitter /></Link></li>
                                         <li><Link href={'/'} className="text-neutral-50"><ImLinkedin /></Link></li>
                                         <li><Link href={'/'} className="text-neutral-50"><AiFillInstagram /></Link></li>
                                </ul>
                       </div>
              </div>
    </footer>
  )
}

export default Footer