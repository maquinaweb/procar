import Image from 'next/image';

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

      <ul className="flex items-center gap-14">
        {brands.map((brand) => (
          <li key={brand.name}>
            <Image
              src={brand.image}
              width={256}
              height={92}
              alt={brand.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Brands;
