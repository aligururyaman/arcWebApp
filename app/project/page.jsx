'use client';
import ProjectComp from '@/components/ProjectComp';
import React, { useEffect, useState } from 'react';
import { db } from '@/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

function Project() {
  const [fadeIn, setFadeIn] = useState(false);
  const [selectedIcMekanProject, setSelectedIcMekanProject] = useState(null);
  const [selectedDisMekanProject, setSelectedDisMekanProject] = useState(null);
  const [icMekanProjects, setIcMekanProjects] = useState([]);
  const [disMekanProjects, setDisMekanProjects] = useState([]);
  const [isIcMekanModalOpen, setIsIcMekanModalOpen] = useState(false);
  const [isDisMekanModalOpen, setIsDisMekanModalOpen] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "adminData"));
    const fetchedProjects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const icMekanProjects = fetchedProjects.filter(project => project.mekan === 'icmekan');
    const disMekanProjects = fetchedProjects.filter(project => project.mekan === 'disMekan');

    setIcMekanProjects(icMekanProjects);
    setDisMekanProjects(disMekanProjects);

    if (icMekanProjects.length > 0) {
      setSelectedIcMekanProject(icMekanProjects[0]);
    }
    if (disMekanProjects.length > 0) {
      setSelectedDisMekanProject(disMekanProjects[0]);
    }
  };

  const openIcMekanModal = () => {
    setIsIcMekanModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeIcMekanModal = () => {
    setIsIcMekanModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  const openDisMekanModal = () => {
    setIsDisMekanModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeDisMekanModal = () => {
    setIsDisMekanModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className=''>
      <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} px-20 w-full `}>
        <h1 className='text-3xl'>İç Mekan.</h1>
      </div>
      <div className='xl:flex flex-row w-full xl:space-y-16'>
        <div className='xl:h-[40rem] m-16'>
          <ProjectComp projects={icMekanProjects} onSelect={setSelectedIcMekanProject} />
        </div>
        <div className='xl:p-4 xl:h-[40rem] xl:flex flex-col justify-between xl:m-16 m-8 xl:w-full'>
          {selectedIcMekanProject && selectedIcMekanProject.mekan === 'icmekan' && (
            <div className=''>
              <h2 className='text-2xl mb-4'>{selectedIcMekanProject.title}</h2>
              <p>{selectedIcMekanProject.desc}</p>
            </div>
          )}
          <div className='flex justify-end xl:mt-auto mt-4'>
            <Button variant="ghost" className='bg-gray-400 hover:text-accent transition-all' onClick={openIcMekanModal}>Projeyi Gör</Button>
          </div>
        </div>
      </div>

      <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} px-16 w-full`}>
        <h1 className='text-3xl'>Dış Mekan.</h1>
      </div>
      <div className='xl:flex flex-row xl:w-full space-y-16'>
        <div className='xl:h-[40rem] m-16'>
          <ProjectComp projects={disMekanProjects} onSelect={setSelectedDisMekanProject} />
        </div>
        <div className='p-4 xl:h-[40rem] flex flex-col justify-between m-16  xl:w-full'>
          {selectedDisMekanProject && selectedDisMekanProject.mekan === 'disMekan' && (
            <div>
              <h2 className='text-2xl mb-4'>{selectedDisMekanProject.title}</h2>
              <p>{selectedDisMekanProject.desc}</p>
            </div>
          )}
          <div className='flex justify-end mt-auto'>
            <Button variant="ghost" className='bg-gray-400 hover:text-accent transition-all' onClick={openDisMekanModal}>Projeyi Gör</Button>
          </div>
        </div>

      </div>

      {isIcMekanModalOpen && (
        <Modal onClose={closeIcMekanModal}>
          <ProjectCarousel project={selectedIcMekanProject} />
        </Modal>
      )}

      {isDisMekanModalOpen && (
        <Modal onClose={closeDisMekanModal}>
          <ProjectCarousel project={selectedDisMekanProject} />
        </Modal>
      )}
    </div>
  );
}

function ProjectCarousel({ project }) {
  return (
    <div className='container xl:mx-auto my-5 h-full xl:flex flex-row gap-10'>
      <Carousel className="xl:w-[50rem]  xl:h-full " opts={{ loop: true }} >
        <CarouselContent className="xl:h-full">
          {project.fileUrls && project.fileUrls.map((url, index) => (
            <CarouselItem key={index} className="xl:h-full">
              <Card className="relative h-full bg-primary">
                <CardContent className="xl:flex xl:h-[40rem] items-center justify-center p-6">
                  <img
                    src={url}
                    alt={`Project Image ${index}`}
                    className="rounded-lg w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center rounded-b-lg">
                    <h1 className="xl:text-4xl">{project.title}</h1>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="xl:flex hidden" />
        <CarouselNext className="xl:flex hidden" />
      </Carousel>
      <div>{project.desc}</div>
    </div>
  );
}

function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-primary rounded-lg overflow-hidden shadow-lg w-full  relative z-10">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>X</button>
        <div className="p-4 h-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Project;
