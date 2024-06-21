'use client';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import React, { useEffect, useState } from 'react';
import mimar1 from '../app/utils/mimar1.jpg';
import mimar2 from '../app/utils/mimar2.jpg';
import mimar3 from '../app/utils/mimar3.jpg';
import mimar4 from '../app/utils/mimar4.jpg';
import mimar5 from '../app/utils/mimar5.jpg';
import mimar6 from '../app/utils/mimar6.jpg';
import Image from 'next/image';


function ProjectComp() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
    <div className='container mx-auto my-5 h-full'>
      <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true, autoplay: true, autoplayInterval: 2000, direction: "right", transitionDuration: 1000, showControls: false, pauseOnHover: true, keyboardNavigation: true }} >
        <CarouselContent className="h-full"  >
          {projects.map((project, index) => (
            <CarouselItem key={index} className="h-full" >
              <Card className="relative h-full border-accent border-2">
                <CardContent className="flex h-[35rem] items-center justify-center p-6 ">
                  <Image src={project.img} alt={project.name} layout="fill" objectFit="cover" className="rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center rounded-b-lg">
                    <h1 className="text-4xl">{project.name}</h1>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default ProjectComp;
