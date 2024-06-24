'use client';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from 'react';

function ProjectComp({ projects, onSelect }) {
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
      const selected = api.selectedScrollSnap();
      setCurrent(selected + 1);
      onSelect(projects[selected]);
    });
  }, [api, onSelect, projects]);

  return (
    <div className='container mx-auto my-5 h-full'>
      <Carousel setApi={setApi} className="w-[50rem] h-full border-2" opts={{ loop: true }} >
        <CarouselContent className="h-full">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="relative h-full bg-primary">
                <CardContent className="flex h-[40rem] items-center justify-center p-6">
                  {project.fileUrls && project.fileUrls[0] && (
                    <img
                      src={project.fileUrls[0]}
                      alt={project.title}
                      className="rounded-lg w-full h-full object-cover object-center"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center rounded-b-lg">
                    <h1 className="text-4xl">{project.title}</h1>
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
