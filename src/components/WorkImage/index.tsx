'use client';

import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState } from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';
import {
  DialogContent,
  DialogHeader,
  DialogTitle
} from '../ui/dialog';

const WorkImage: React.FC<{
  image: string;
  work: TWork;
}> = ({ image, work }) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={image}
          alt="Guy image"
          className="w-full rounded-md object-cover shadow-md flex-1 h-auto transition-all cursor-pointer hover:brightness-75"
          fill
        />
      </DialogTrigger>

      <DialogContent className="sm:max-w-6xl px-1 md:px-3">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">
            {work.title}
          </DialogTitle>
        </DialogHeader>
        <Carousel
          setApi={setApi}
          className="rounded-lg overflow-hidden"
          opts={{
            startIndex: work.images.indexOf(image)
          }}
        >
          <CarouselPrevious className="hidden sm:block" />
          <CarouselContent>
            {work.images.map((image, index) => (
              <CarouselItem
                className="relative basis-full aspect-video"
                key={`image-${index}`}
              >
                <Image
                  src={image}
                  alt={work.title}
                  className="w-full h-auto object-cover shadow-md"
                  fill
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hidden sm:block" />
        </Carousel>

        <Carousel className="px-0 sm:px-11">
          <CarouselContent className="-ml-2">
            {work.images.map((image, index) => (
              <CarouselItem
                className="ml-2 relative basis-1/4 aspect-video"
                key={`image-${index}`}
                onClick={() => api?.scrollTo(index)}
              >
                <Image
                  src={image}
                  alt={work.title}
                  className="w-full h-auto object-cover rounded-sm shadow-md"
                  fill
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default WorkImage;
