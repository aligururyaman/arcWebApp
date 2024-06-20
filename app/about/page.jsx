import Image from "next/image"
import pp from "../utils/pp.jpg"

function About() {
  return (
    <div className='flex flex-row w-[100%] items-center px-24 gap-48  h-[40rem] mt-10 bg-slate-900'>
      <div className="">
        <Image src={pp} height={600} width={300} className="rounded-2xl" />
      </div>
      <div className="w-[50%] space-y-6">
        <p>Abdullah Küçükkılınç</p>
        <p>İç Mimar</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur molestias soluta explicabo maiores facere vel, sequi quasi consequuntur accusantium perspiciatis similique eum harum nesciunt vitae dolore autem consectetur magni.</p>
      </div>


    </div>
  )
}

export default About