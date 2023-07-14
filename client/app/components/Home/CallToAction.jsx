import Link from "next/link"

const CallToAction = () => {
  return (
    <div className="py-24">
             <div className="w-11/12 mx-auto">
                        <div className="py-16 bg-violet-600 text-center w-4/5 mx-auto rounded-2xl">
                                      <h2 className="font-boldish text-4xl w-1/2 leading-[50px] text-neutral-50 mx-auto">Make Sales Success Inevitable with Lively</h2>
                                      <div className="my-5 flex gap-5 justify-center">
                                                 <Link href={'/'} className="bg-neutral-50 py-3 px-10 rounded-lg">Try for Free</Link>
                                                 <Link href={'/'} className="border-2 py-3 px-10 rounded-lg text-neutral-50">See Prices</Link>
                                      </div>
                        </div>
             </div>
    </div>
  )
}

export default CallToAction