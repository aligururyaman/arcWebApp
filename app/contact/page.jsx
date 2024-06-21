'use client';
import React, { useEffect, useState } from 'react'

function Contact() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, [])
  return (
    <div className='mt-10'>
      <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} px-16 my-10`}>
        <h1 className='text-3xl'>İletişim.</h1>
      </div>
      <div className='flex flex-row space-y-52 m-10'>
        <div className='h-[30rem]  w-full border-2 border-accent'>

        </div>
        <div className='h-52 w-full border-2 border-accent'>

        </div>
      </div>
    </div>
  )
}

export default Contact