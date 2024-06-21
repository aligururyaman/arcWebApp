import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='mt-10 w-full'>
      <div className='h-1 w-full border-b border-gray-500' />
      <div className='m-5 flex flex-row space-x-4'>
        <div className='flex flex-col space-y-3'>
          <div>
            <Link href="/adminPanel">
              <div className='text-xs text-gray-400'>
                <h1>Panel</h1>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className='text-xs text-gray-400'>
            <h1>Copyright © Tüm Hakları Saklıdır.</h1>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Footer