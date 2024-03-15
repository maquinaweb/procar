import Image from 'next/image';

import { works } from '@/data/works';
import SectionHeader from '../SectionHeader';

const Gallery: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col gap-8 py-28 text-neutral-800">
      <SectionHeader
        title="Galeria de obras"
        description="Veja imagens detalhadas de peças e reformas que realçam nosso trabalho dedicado em aprimorar veículos."
      />

      <ul className="grid grid-cols-4 gap-4">
        {works.map((work, index) => (
          <li
            key={`work-${index}`}
            className="flex flex-col bg-neutral-100 rounded-md overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-2">
              {work.images.slice(0, 4).map((image, index) => (
                <Image
                  key={`image-${index}`}
                  src={image}
                  alt="Work"
                  className="w-full aspect-video object-cover"
                  width={135}
                  height={100}
                />
              ))}
            </div>
            <p className="px-3 py-2 font-bold text-neutral-700">
              {work.title}
            </p>
          </li>
        ))}
      </ul>

      <button className="flex self-center h-fit w-fit rounded-md gap-3 items-center px-5 py-2 text-neutral-50 bg-red-900 text-sm font-semibold transition-all hover:brightness-90 active:brightness-110">
        Veja mais
      </button>
    </section>
  );
};

export default Gallery;
