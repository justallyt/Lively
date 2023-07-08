import Image from "next/image"
import feature1 from "../../public/dummy1.png"
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
                                   <div className="">
                                               <h2 className="text-4xl font-boldish my-2">What's inside Lively</h2>
                                               <p className="text-base font-primary">The platform provides advanced features that enable businesses to get all the benefits of managed chat system.</p>

                                               <div className="border mt-5">
                                                        
                                               </div>
                                   </div>
                                   <div className="">
                                               <Image src={feature1} className="object-contain border" alt="Feature Image"/>
                                   </div>
                         </div>
             </div>
    </div>
  )
}

export default AboutSection