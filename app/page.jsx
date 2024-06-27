'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import mainMobile from "./utils/mobile.png"
import mainBg from "./utils/glam.jpg"

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main className='xl:px-24 px-5'>
      <div className='xl:absolute p-28 xl:flex lg:flex hidden'>
        <div className='w-[40rem] h-[40rem]  bg-accent absolute rounded-full opacity-60'>
        </div>
        <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} xl:py-10 mx-10 absolute mt-40`}>
          <h1 className='text-6xl'>Yeni Nesil Mimarlık.</h1>
        </div>
      </div>
      <div className='hidden xl:flex lg:flex'>
        <Image src={mainBg} height={500} className='rounded-xl w-full' />
        <div></div>
      </div>
      <div className='xl:hidden lg:hidden flex justify-center items-center'>
        <Image src={mainMobile} height={1000} className='flex object-cover justify-center items-center' />
      </div>
      <div>
      </div>
    </main>
  );
}
