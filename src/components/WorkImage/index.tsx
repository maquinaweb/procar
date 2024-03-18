'use client';

import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import Image from 'next/image';

import {
  Carousel,
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={image}
          alt="Guy image"
          className="w-full rounded-md shadow-md flex-1 h-auto transition-all cursor-pointer hover:brightness-75"
          fill
        />
      </DialogTrigger>

      <DialogContent className="sm:max-w-6xl">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">
            {work.title}
          </DialogTitle>
        </DialogHeader>
        <Carousel
          className="rounded-md overflow-hidden"
          opts={{
            startIndex: work.images.indexOf(image)
          }}
        >
          <CarouselPrevious />
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
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default WorkImage;
