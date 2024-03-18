import Link from 'next/link';

import { works } from '@/data/works';
import SectionHeader from '../SectionHeader';
import WorkCard from '../WorkCard';

const Gallery: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-3 py-14 lg:py-28 text-neutral-800">
      <SectionHeader
        title="Galeria de obras"
        description="Veja imagens detalhadas de peças e reformas que realçam nosso trabalho dedicado em aprimorar veículos."
      />

      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {works.map((work, index) => (
          <Link href={`/obras/${index}`} key={`work-${index}`}>
            <WorkCard work={work} />
          </Link>
        ))}
      </ul>

      <Link href="/obras" className="self-center w-fit">
        <button className="flex h-fit w-fit rounded-md gap-3 items-center px-5 py-2 text-neutral-50 bg-red-900 text-sm font-semibold transition-all hover:brightness-90 active:brightness-110">
          Veja mais
        </button>
      </Link>
    </section>
  );
};

export default Gallery;
