import Header from "./Header"
import Image from "next/image"
import hero from "../../public/hero.jpg"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="w-full  h-auto pb-20 bg-gradient-to-b from-indigo-100 via-purple-50 to-white">
              <Header />
              <div className="w-[90%] xl:w-[1300px] mx-auto">
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
              </div>
    </section>
  )
}

export default HeroSection