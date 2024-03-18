import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import { brands } from '@/data/brands';
import SectionHeader from '../SectionHeader';

const Brands: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col gap-10 py-28">
      <SectionHeader
        title="Marcas que atendemos"
        description="Trabalhamos com todo tipo de caminhonete, mas aqui estão as
          principais marcas que atendemos."
      />

      <Carousel
        className="flex items-center gap-14"
        opts={{
          skipSnaps: true,
          align: 'start'
        }}
      >
        <CarouselContent className="-ml-14">
          {brands.map((brand) => (
            <CarouselItem
              className="flex items-center pl-14 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 2xl:basis-[12.5%]"
              key={brand.name}
            >
              <Image
                src={brand.image}
                width={256}
                height={92}
                alt={brand.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Brands;
