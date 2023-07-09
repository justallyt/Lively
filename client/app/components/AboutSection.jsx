import Image from "next/image"
import feature1 from "../../public/feature1.jpg"
import feature2 from "../../public/feature2.jpg"
import feature3 from "../../public/hero2.jpg"
import SimpleFaq from "./SimpleFaq"
import { features } from "../data/features"
const AboutSection = () => {
  return (
    <div className="">
             <div className="py-24 px-[10%] bg-violet-600">
                     <h2 className=" font-semiboldish text-[55px] leading-[70px] text-white">We offer a wide range of features that are specifically designed to improve customer relationships, increase feedback efficiency, improve data management, communication and sales performance.</h2>
             </div>
             <div className="py-24 w-[90%] mx-auto">
                        <div className="text-center">
                                  <h4 className="text-indigo-500 font-semiboldish">Solution</h4>
                                  <h1 className="font-semiboldish my-5 text-5xl w-3/4 mx-auto">Delivering High Quality Customer Communication Experience</h1>
                                  <p className="w-3/5 mx-auto text-lg font-primary my-5">The platform streamlines communication with customers by providing a realtime chat widget that businesses can embed on their websites, to link chats either whatsapp or text message.</p>
                        </div>

                         <div className="mt-16 grid grid-cols-2 gap-10">
                                   <div className="flex items-center">
                                        <div className="">
                                               <h2 className="text-4xl font-boldish my-2">What's inside Lively</h2>
                                               <p className="text-base font-primary">The platform provides advanced features that enable businesses to get all the benefits of managed chat system.</p>

                                               <div className="mt-5">
                                                        { features.map(item => 
                                                                <SimpleFaq  data={item} />
                                                          )}
                                               </div>
                                         </div>
                                   </div>
                                   <div className="grid grid-cols-2 gap-10">
                                              <div className="flex flex-col gap-10">
                                                       <Image src={feature1} className="object-cover  rounded-2xl" alt="Feature Image"/>
                                                       <Image src={feature3} className="object-cover  rounded-2xl" alt="Feature Image"/>
                                              </div>
                                              <div className="flex items-center">
                                                          <Image src={feature2} className=" object-cover   rounded-2xl" alt="Feature Image"/>
                                              </div>
                                   </div>
                         </div>
             </div>
    </div>
  )
}

export default AboutSection