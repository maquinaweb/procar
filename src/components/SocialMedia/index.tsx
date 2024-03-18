import { FaInstagram, FaYoutube } from 'react-icons/fa6';
import ytfps from 'ytfps';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import SectionHeader from '../SectionHeader';
import Video from '../Video';

const SocialMedia: React.FC = async () => {
  const videos = await ytfps('PLoZQ-oDhkHnba6xeHE9hJHPj8ae-RQvMr');

  return (
    <section className="container mx-auto text-neutral-800 px-3 py-28">
      <SectionHeader
        title="Nossas redes sociais"
        description="Acompanhe nossas redes sociais, sempre mostramos nossos projetos, o próximo pode ser o seu!"
      />

      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-neutral-50 rounded-lg shadow-lg px-2 py-5 md:p-5 gap-8 items-center">
          <div className="flex flex-col items-center">
            <FaInstagram className="text-5xl md:text-6xl lg:text-8xl" />
            <p className="font-semibold md:font-bold text-md md:text-2xl">
              @procarprime
            </p>
          </div>

          <div className="w-full flex-1 grid grid-cols-4 gap-2">
            <div className="w-full h-auto aspect-square bg-red-200 rounded-lg"></div>
            <div className="w-full h-auto aspect-square bg-red-200 rounded-lg"></div>
            <div className="w-full h-auto aspect-square bg-red-200 rounded-lg"></div>
            <div className="w-full h-auto aspect-square bg-red-200 rounded-lg"></div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row bg-neutral-50 rounded-lg shadow-lg px-2 py-5 md:p-5 gap-8 items-center">
          <Carousel
            className="w-full"
            opts={{
              skipSnaps: true,
              align: 'start'
            }}
          >
            <CarouselPrevious />
            <CarouselContent className="-ml-1">
              {videos.videos.map((video) => (
                <CarouselItem
                  key={video.id}
                  className="pl-1 basis-1/2 lg:basis-1/3"
                >
                  <Video id={video.id} title={video.title} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>

          <div className="flex flex-col items-center">
            <FaYoutube className="text-5xl md:text-6xl lg:text-8xl" />
            <p className="font-semibold md:font-bold text-md md:text-2xl">
              @procarprime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
