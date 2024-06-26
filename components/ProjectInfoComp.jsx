import React from 'react'
import { Button } from './ui/button'

function ProjectInfoComp() {
  return (
    <div className='p-4 h-[40rem] flex flex-col justify-between m-16 w-full'>
      {selectedProject && selectedProject.mekan === 'icmekan' && (
        <div className=''>
          <h2 className='text-2xl mb-4'>{selectedProject.title}</h2>
          <p>{selectedProject.desc}</p>
        </div>
      )}
      <div className='flex justify-end mt-auto'>
        <Button variant="ghost" className='bg-gray-400 hover:text-accent transition-all' onClick={openModal}>Projeyi Gör</Button>
      </div>
    </div>
  )
}

export default ProjectInfoComp