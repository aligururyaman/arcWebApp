import Image from "next/image"
import pp from "../utils/pp.jpg"
import bg from "../utils/mainTop.png"

function About() {
  return (
    <div className='flex flex-row w-[100%] items-center px-24 gap-48 h-[40rem] mt-10 bg-slate-900 relative'>
      <div className="">
        <Image src={pp} height={600} width={300} className="rounded-2xl z-10" />
      </div>
      <div className="w-[50%] space-y-6 relative z-20">
        <div className="absolute bottom-32 opacity-20 w-full h-full pointer-events-none">
          <Image src={bg} width={900} height={900} className="pointer-events-none" />
        </div>
        <div className="relative z-20">
          <p>Abdullah Küçükkılınç</p>
          <p>İç Mimar</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur molestias soluta explicabo maiores facere vel, sequi quasi consequuntur accusantium perspiciatis similique eum harum nesciunt vitae dolore autem consectetur magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quis quam. Molestiae doloremque ducimus voluptas, maiores necessitatibus odio exercitationem, maxime dolor quia inventore ratione soluta officiis deleniti nemo quam in!</p>
        </div>
      </div>
    </div>
  )
}

export default About
