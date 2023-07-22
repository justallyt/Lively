import Link from "next/link"

const CallToAction = () => {
  return (
    <div className="py-24">
             <div className="w-full tiny:w-11/12 mx-auto">
                        <div className="py-16 bg-violet-600 text-center w-4/5 mx-auto rounded-2xl">
                                      <h2 className="font-boldish text-2xl tiny:text-4xl w-4/5 md:w-1/2 tiny:leading-[50px] text-neutral-50 mx-auto">Make Sales Success Inevitable with Lively</h2>
                                      <div className="my-5  flex gap-5 justify-center flex-col tiny:flex-row">
                                                 <Link href={'/'} className="bg-neutral-50 py-3 px-10 rounded-lg w-[200px] mx-auto tiny:mx-0">Try for Free</Link>
                                                 <Link href={'/'} className="border-2 py-3 px-10 rounded-lg text-neutral-50 w-[200px] mx-auto tiny:mx-0">See Prices</Link>
                                      </div>
                        </div>
             </div>
    </div>
  )
}

export default CallToAction