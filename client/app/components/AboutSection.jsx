import Image from "next/image"
import feature1 from "../../public/feature1.jpg"
import feature2 from "../../public/feature2.jpg"
import feature3 from "../../public/hero2.jpg"
import workflow1 from "../../public/workflow1.jpg"
import workflow2 from "../../public/workflow2.jpg"
import workflow3 from "../../public/workflow3.jpg"
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

                         <div className="pt-14 mt-14">
                                   <div className="grid grid-cols-2 gap-10">
                                             <div className="flex flex-col gap-5 items-center">
                                                      <Image src={workflow1} className="object-cover  rounded-2xl" height={300} alt="Workflow Image" />
                                                      <div className="grid grid-cols-2 gap-5">
                                                                   <Image src={workflow2} className="object-cover max-h-[300px]  rounded-2xl"  alt="Workflow Image" />
                                                                   <Image src={workflow3} className="object-cover max-h-[300px]  rounded-2xl" alt="Workflow Image" />
                                                      </div>
                                             </div>
                                             <div className="flex items-center">
                                                        <div>
                                                                   <h4 className="text-indigo-500 font-semiboldish">Workflow</h4>
                                                                   <h1 className="font-boldish text-5xl mt-3 mb-5 block">See how Lively can help your business</h1>
                                                                   <p className="text-lg w-11/12 my-5">There are more quantifiable reasons to choose Lively to propel your business to the next level by enabling you seamlessly integrate our chat solution with other tools for a streamlined workflow throughout your customer's entire buying journey. </p>

                                                                   <div className="grid grid-cols-2 gap-5 mb-8">
                                                                             <div>
                                                                                       <h2 className="text-indigo-500 text-4xl font-semiboldish mb-4 ">120k +</h2>
                                                                                       <p className="text-slate-900">Successful Campaigns</p>
                                                                             </div>
                                                                             <div>
                                                                                       <h2 className="text-indigo-500 text-4xl font-semiboldish mb-4 ">150k +</h2>
                                                                                       <p className="text-slate-900">New Customer Daily</p>
                                                                             </div>
                                                                             <div>
                                                                                       <h2 className="text-indigo-500 text-4xl font-semiboldish mb-4 ">130k +</h2>
                                                                                       <p className="text-slate-900">Onboarded Businesses</p>
                                                                             </div>
                                                                             <div>
                                                                                       <h2 className="text-indigo-500 text-4xl font-semiboldish mb-4 ">165k +</h2>
                                                                                       <p className="text-slate-900">Positive User reviews</p>
                                                                             </div>
                                                                   </div>

                                                                   <div className="bg-indigo-100 p-8 rounded-xl">
                                                                           <h3 className="font-semiboldish text-xl mb-3">Solid Engagement</h3>
                                                                           <p>Reach out to visitors proactively using personalized chatbot greetings. Turn website visits into sales opportunities.</p>
                                                                   </div>
                                                        </div>
                                             </div>
                                   </div>
                         </div>
             </div>
    </div>
  )
}

export default AboutSection