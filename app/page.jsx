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
    <main className='xl:px-24 px-5'>
      <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} xl:py-10 xl:mx-20 py-12`}>
        <h1 className='text-6xl'>Yeni Nesil Mimarlık...</h1>
      </div>
      <div className='hidden xl:flex'>
        <Image src={mainTop} height={700} />
      </div>
      <div className='xl:hidden'>
        <Image src={mainMobile} height={900} />
      </div>
      <div>
      </div>

    </main>
  );
}
