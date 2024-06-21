import React from 'react';
import Slider from 'react-slick';
import mimar1 from '../app/utils/mimar1.jpg';
import mimar2 from '../app/utils/mimar2.jpg';
import mimar3 from '../app/utils/mimar3.jpg';
import mimar4 from '../app/utils/mimar4.jpg';
import mimar5 from '../app/utils/mimar5.jpg';
import mimar6 from '../app/utils/mimar6.jpg';
import Image from 'next/image';


function ProjectComp() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

  const projects = [
    {
      name: "Mimar 1",
      img: mimar1
    },
    {
      name: "Mimar 2",
      img: mimar2
    },
    {
      name: "Mimar 3",
      img: mimar3
    },
    {
      name: "Mimar 4",
      img: mimar4
    },
    {
      name: "Mimar 5",
      img: mimar5
    },
    {
      name: "Mimar 6",
      img: mimar6
    },
  ];

  return (
    <div className='container mx-auto m-5'>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className='w-48 h-[35rem] rounded-lg relative'>
            <Image src={project.img} alt={project.name} layout="fill" objectFit="cover" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center rounded-b-lg">
              <h1 className='text-5xl'>{project.name}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectComp;
