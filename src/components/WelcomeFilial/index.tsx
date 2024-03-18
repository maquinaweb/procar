import Image from 'next/image';

import bannerFilialImage from '@/public/banner-filial.png';

const WelcomeFilial: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full h-auto aspect-[16/5]">
      <Image
        src={bannerFilialImage}
        alt="Logo"
        className="w-full h-auto object-cover select-none"
        placeholder="blur"
        priority
      />
    </section>
  );
};

export default WelcomeFilial;
