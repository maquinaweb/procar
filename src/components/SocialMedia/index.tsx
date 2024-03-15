import { FaInstagram, FaYoutube } from 'react-icons/fa';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import SectionHeader from '../SectionHeader';

const SocialMedia: React.FC = () => {
  return (
    <section className="container mx-auto text-neutral-800">
      <SectionHeader
        title="Nossas redes sociais"
        description="Acompanhe nossas redes sociais, sempre mostramos nossos projetos, o próximo pode ser o seu!"
      />

      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        <div className="flex bg-neutral-50 rounded-lg shadow-lg p-5 gap-8 items-center">
          <div className="flex flex-col items-center">
            <FaInstagram size={96} />
            <p className="font-bold text-2xl">@procarprime</p>
          </div>

          <div className="flex-1 grid grid-cols-4 gap-2">
            <div className="w-full h-auto aspect-square bg-red-200 rounded-lg"></div>
            <div className="w-full h-auto aspect-square bg-red-200 rounded-lg"></div>
            <div className="w-full h-auto aspect-square bg-red-200 rounded-lg"></div>
            <div className="w-full h-auto aspect-square bg-red-200 rounded-lg"></div>
          </div>
        </div>

        <div className="flex bg-neutral-50 rounded-lg shadow-lg p-5 gap-8 items-center">
          <Carousel className="w-full">
            <CarouselPrevious />
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <div className="w-full h-auto aspect-video bg-red-200 rounded-lg"></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-full h-auto aspect-video bg-red-200 rounded-lg"></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-full h-auto aspect-video bg-red-200 rounded-lg"></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-full h-auto aspect-video bg-red-200 rounded-lg"></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-full h-auto aspect-video bg-red-200 rounded-lg"></div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
          </Carousel>

          <div className="flex flex-col items-center">
            <FaYoutube size={96} />
            <p className="font-bold text-2xl">@procarprime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
