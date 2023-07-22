import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu"
const page = () => {
  return (
    <div className=''>
                  <div className='w-full h-[80px]'>
                              <div className='w-[90%] mx-auto'>
                                           <Link  href={'/'} className='inline-flex'>
                                                  <div className="w-[180px] h-[80px]  flex items-center gap-1">
                                                            <Image src='/logo.png' width={45} height={45} alt="logo" />
                                                            <h1 className="font-semiboldish text-3xl font-">Lively</h1>
                                                  </div>
                                          </Link>             
                              </div>
                  </div>

                  <div className='py-5 mb-10'>
                            <div className='w-[90%] mx-auto'>
                                     <div className='w-[90%] lg:w-[800px] mx-auto bg-indigo-50/20 py-14 rounded-xl'>
                                               <h2 className='font-semiboldish text-4xl text-center'>Create an Account with Us</h2>
                                               <p className='font-primary text-base text-center my-4'>It's free and Easy</p>

                                               <form className='w-11/12 px-5 md:px-0 md:w-3/5 mx-auto' >
                                                         <div className='mb-5'>
                                                                   <label className='block mb-1 text-sm font-primary'>Your Name</label>
                                                                   <input type='text' className='w-full h-14 px-3 rounded-lg border border-gray-300/20 outline-none placeholder:text-sm font-primary' placeholder='Enter your name' />
                                                         </div>
                                                         <div className='mb-5'>
                                                                   <label className='block mb-1 text-sm font-primary'>Your Email Address</label>
                                                                   <input type='email' className='w-full h-14 px-3 rounded-md border border-gray-300/20 outline-none placeholder:text-sm font-primary' placeholder='Type your e-mail' />
                                                         </div>
                                                         <div className='mb-5'>
                                                                   <label className='block mb-1 text-sm font-primary'>Your Password</label>
                                                                   <input type='email' className='w-full h-14 px-3 rounded-md border border-gray-300/20 outline-none placeholder:text-sm font-primary' placeholder='Type your password' />
                                                         </div>
                                                         <div className='mb-5 flex gap-1 items-start'>
                                                                     <input type='checkbox' className='outline-none mt-[6px]' />
                                                                     <p className='text-sm font-primary'>By creating an account you agree to the <Link className='font-semiboldish text-sm text-indigo-500' href={'/'}>Terms and Conditions</Link> and our <Link href={'/'} className='font-semiboldish text-indigo-500'>Privacy Policy</Link></p>
                                                         </div>

                                                         <button className='bg-indigo-500 w-11/12 mx-auto block h-14 text-white cursor-pointer rounded-lg'>Register</button>

                                                         <div className="flex mt-5 justify-center gap-1">
                                                                      <p className="text-sm font-primary">Already have an Account? </p>
                                                                      <Link href={'/auth/login'} className="flex items-center font-semiboldish text-indigo-500 text-sm gap-1">Login <span><LuExternalLink /></span> </Link>
                                                           </div>

                                                         <div className='flex justify-center my-6 items-center gap-3'>
                                                                    <span  className='w-28 h-[1px] bg-slate-200 mt-[5px]'></span>
                                                                      <p className='text-[12px] text-center  sm:text-sm font-primary'>or do it with other accounts</p>
                                                                      <span  className='w-28 h-[1px] bg-slate-200 mt-[5px]'></span>
                                                         </div>

                                                         <div className='flex justify-center gap-3'>
                                                                     <span className='border w-10 h-10 flex justify-center items-center rounded-lg cursor-pointer'><FcGoogle /></span>
                                                                     <span className='border w-10 h-10 flex justify-center items-center rounded-lg cursor-pointer'><FaFacebookF /></span>
                                                         </div>
                                               </form>
                                     </div>
                            </div>
                  </div>

                  <p className="py-8 text-center text-slate-500 text-sm font-primary">&copy; { new Date().getFullYear() } Lively. All Rights Reserved.</p>
    </div>
  )
}

export default page