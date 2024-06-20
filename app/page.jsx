'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import mainTop from "./utils/mainTop.png"
import mainMobile from "./utils/mobile.png"

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main className='px-24'>
      <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} py-10`}>
        <h1 className='text-6xl'>Yeni nesil Mimarlık...</h1>
      </div>
      <div className='hidden xl:flex'>
        <Image src={mainTop} height={700} />
      </div>
      <div className='xl:hidden'>
        <Image src={mainMobile} height={700} />
      </div>
    </main>
  );
}
