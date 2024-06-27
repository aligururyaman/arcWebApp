import Image from "next/image"
import pp from "../utils/pp.jpg"
import bg from "../utils/mainTop.png"

function About() {
  return (
    <div className='xl:flex flex-row items-center px-24 gap-48 xl:h-[40rem] mt-10 bg-slate-900 relative p-10'>
      <div className="">
        <Image src={pp} height={600} width={300} className="rounded-2xl z-10" />
      </div>
      <div className="xl:w-[50%] space-y-6 relative z-20 -mx-16">
        <div className="absolute  opacity-20 w-full h-full pointer-events-none xl:flex hidden">
          <Image src={bg} width={800} height={800} className="pointer-events-none" />
        </div>
        <div className="relative z-20 flex flex-col gap-5">
          <p className="text-2xl mx-16">Abdullah Küçükkılınç</p>
          <p className="text-2xl font-bold mx-16">İç Mimar</p>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur molestias soluta explicabo maiores facere vel, sequi quasi consequuntur accusantium perspiciatis similique eum harum nesciunt vitae dolore autem consectetur magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quis quam. Molestiae doloremque ducimus voluptas, maiores necessitatibus odio exercitationem, maxime dolor quia inventore ratione soluta officiis deleniti nemo quam in!</p>
        </div>
      </div>
    </div>
  )
}

export default About
