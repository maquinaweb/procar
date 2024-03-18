import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import { works } from '@/data/works';
import SectionHeader from '../SectionHeader';
import WorkCard from '../WorkCard';

const ListWorks: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col gap-10 px-3 py-14 lg:py-28">
      <SectionHeader
        title="Outras restaurações"
        description="Veja aqui mais algumas demonstrações de nosso trabalho!"
      />

      <Carousel
        opts={{
          skipSnaps: true,
          align: 'start'
        }}
      >
        <CarouselContent className="-ml-0 py-5">
          {works.map((work, index) => (
            <CarouselItem
              className="ml-0 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              key={`work-${index}`}
            >
              <Link href={`/obras/${index}`}>
                <WorkCard work={work} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ListWorks;
