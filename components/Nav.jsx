import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'


function Nav() {
  return (
    <div className='flex gap-8'>
      <Link href="/about">
        <Button variant="ghost" className='hover:text-accent transition-all'>Hakkımızda</Button>
      </Link>
      <Link href="/project">
        <Button variant="ghost" className='hover:text-accent transition-all'>Projeler</Button>
      </Link>
    </div>
  )
}

export default Nav