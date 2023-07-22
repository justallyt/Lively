import Link from "next/link"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
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
                                               <h2 className='font-semiboldish text-4xl text-center mb-5'>Hi, Welcome Back</h2>
                                               <p className='font-primary text-base text-center mb-6'>Login into your account</p>

                                                <div className="mb-5 cursor-pointer flex w-[250px] gap-1 border border-slate-300/30 mx-auto justify-center items-center h-12 rounded-md">
                                                           <span className="mt-1"><FcGoogle /></span>
                                                           <p className="text-sm font-primary">Login with Google</p>
                                                </div>
                                                <div className='flex justify-center my-6 items-center gap-3'>
                                                          <span  className='w-28 h-[1px] bg-slate-200 mt-[5px]'></span>
                                                            <p className='text-[12px] text-center  sm:text-sm font-primary'>or login with email</p>
                                                            <span  className='w-28 h-[1px] bg-slate-200 mt-[5px]'></span>
                                                  </div>
                                               <form className='w-11/12 px-5 md:px-0 md:w-3/5 mx-auto' >
                                                         <div className='mb-5'>
                                                                   <label className='block mb-1 text-sm font-primary'>Your Email Address</label>
                                                                   <input type='email' className='w-full h-14 px-3 rounded-md border border-gray-300/20 outline-none placeholder:text-sm font-primary' placeholder='Type your e-mail' />
                                                         </div>
                                                         <div className='mb-5'>
                                                                   <label className='block mb-1 text-sm font-primary'>Your Password</label>
                                                                   <input type='email' className='w-full h-14 px-3 rounded-md border border-gray-300/20 outline-none placeholder:text-sm font-primary' placeholder='Type your password' />
                                                         </div>
                                                         <div className='mb-5 '>
                                                                     <p className="font-semiboldish text-sm text-indigo-500 text-right">Forgot your Password?</p>
                                                         </div>

                                                         <button className='bg-indigo-500 w-11/12 mx-auto block h-14 text-white cursor-pointer rounded-lg'>Login</button>

                                                           <div className="flex mt-5 justify-center gap-1">
                                                                      <p className="text-sm font-primary">Not Registered Yet? </p>
                                                                      <Link href={'/auth/signup'} className="flex items-center font-semiboldish text-indigo-500 text-sm gap-1">Create Account <span><LuExternalLink /></span> </Link>
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