import { testimonials } from "../data/testimonials"
import { MdStar } from "react-icons/md"
import Image from "next/image"
import Link from "next/link"
const Testimonials = () => {
  return (
    <div className="py-24 bg-slate-50">
                <div className="w-[90%] mx-auto">
                           <div className="w-[700px] mx-auto text-center">
                                       <h1 className="font-boldish text-5xl leading-[60px]">Customer Success is our Success</h1>
                                       <p className="text-lg w-11/12 mx-auto my-5">Discover how businesses like yours use Lively acquire engage, and support customers.</p>
                           </div>

                           <div className="mt-10 grid grid-cols-3 gap-5 w-[85%] mx-auto [&>*:nth-child(4)]:col-start-3 [&>*:nth-child(4)]:row-start-1 [&>*:nth-child(3)]:col-start-2 [&>*:nth-child(3)]:mt-[-195px]">
                                       { testimonials.map(kitu => 
                                            <div className="bg-gray-100 p-8 rounded-2xl h-max" key={kitu.id}>
                                                <div className="flex gap-1 items-center mb-3">
                                                            <div className="w-[50px] h-[50px] border rounded-full overflow-hidden">
                                                                     <Image src={`/${kitu.image}`} alt="Testimonial Image" className="w-full h-full object-cover" width={60}  height={60}/>
                                                            </div>
                                                            <div className="">
                                                                    <h3 className="font-semiboldish">{kitu.name}</h3>
                                                                     <p className="flex">
                                                                              <span className="text-yellow-500"><MdStar /></span>
                                                                              <span className="text-yellow-500"><MdStar /></span>
                                                                              <span className="text-yellow-500"><MdStar /></span>
                                                                              <span className="text-yellow-500"><MdStar /></span>
                                                                              <span className="text-yellow-500"><MdStar /></span>
                                                                      </p>
                                                            </div>
                                                </div>
                                                <p className="mb-5">{kitu.word}</p>
                                                <p className="text-gray-500 text-sm font-primary">{kitu.date}</p>
                                          </div>
                                        )}
                           </div>
                           <div className="mt-16 flex justify-center">
                                       <Link href={'/'} className="border-2 border-indigo-400 text-indigo-500 text-sm font-semiboldish rounded-[6px] py-4 px-7">See All Stories</Link>
                           </div>
                </div>
    </div>
  )
}

export default Testimonials