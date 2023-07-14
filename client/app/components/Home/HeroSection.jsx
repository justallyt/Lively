import Header from "../Header"
import Image from "next/image"
import hero from "../../../public/hero3.jpg"
import Link from "next/link"
import logo1 from "../../../public/logos/intercom.png"
import logo2 from "../../../public/logos/square.png"
import logo3 from "../../../public/logos/mailchimp.png"
import logo4 from "../../../public/logos/discord.png"
import logo5 from "../../../public/logos/hellosign.png"
import logo6 from "../../../public/logos/pipedrive.png"
import logo7 from '../../../public/logos/attentive.jpg'
import logo8 from "../../../public/logos/dropbox.png"
import logo9 from "../../../public/logos/grammarly.png"

const logos = [
     { id: 0, image: logo1},
     { id: 1, image: logo2},
     { id: 2, image: logo3},
     { id: 3, image: logo4},
     { id: 4, image: logo5},
     { id: 5, image: logo6},
     { id: 6, image: logo7},
     { id: 7, image: logo8},
     { id: 8, image: logo9}
]
const HeroSection = () => {
  return (
    <section className="w-full  h-auto pb-20 bg-gradient-to-b from-indigo-100 via-purple-50 to-white">
              <Header />
              <div className="w-[90%] xl:w-[80%] mx-auto">
                      <div className="py-24">
                                   <div className="w-11/12 xl:w-[800px] mx-auto ">
                                                       <h1 className="font-semiboldish text-7xl text-center">Communicate quickly with your customers</h1>
                                                       <p className="my-8 font-primary text-lg text-center">An awesome & powerful software for small and medium-sized businesses giving them a simple, efficient and easy way to engage customer enquiries hence build stronger and fruitful relationships with customers.</p>

                                                       <div className="flex justify-center gap-8">
                                                                 <Link href={'/'} className="bg-indigo-500 py-4 text-white px-10 rounded-lg">Get Started</Link>
                                                                 <Link href={'/'} className="py-4 px-10 border-2 border-indigo-100 text-indigo-500 rounded-lg">View Demo</Link>
                                                       </div>
                                   </div>
                      </div>
                      <div className="">
                                 <Image src={hero} alt="Hero Image" height={600} className="mx-auto rounded-xl"/>
                      </div>

                      <div className="mt-12">
                                 <h2 className="font-boldish text-center text-4xl">Trusted by the fastest growing Companies</h2>
                                 <div className="flex gap-5 w-[90%] flex-wrap justify-center mt-10 mx-auto">
                                          {
                                             logos.map(kitu => 
                                                  <div className="w-[180px]" key={kitu.id}>
                                                           <Image src={kitu.image} alt="Partner Logo" className=" aspect-[2/1] mix-blend-multiply object-contain" />
                                                  </div>
                                              )
                                          }
                                 </div>
                      </div>
              </div>
    </section>
  )
}

export default HeroSection