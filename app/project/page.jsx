'use client';
import ProjectComp from '@/components/ProjectComp';
import React, { useEffect, useState } from 'react'

function Project() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>
      <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} px-16`}>
        <h1 className='text-3xl'>Projelerimiz</h1>
      </div>
      <div className='h-[40rem] border-2 border-accent rounded-lg m-16'>
        <ProjectComp />
      </div>
    </div>
  )
}

export default Project