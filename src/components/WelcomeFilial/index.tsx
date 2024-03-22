import Image from 'next/image';

import bannerFilialMobileImage from '@/public/banner-filial-mobile.webp';
import bannerFilialImage from '@/public/banner-filial.png';

const WelcomeFilial: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full h-auto aspect-[16/5]">
      <Image
        src={bannerFilialImage}
        alt="Logo"
        className="hidden md:block w-full h-auto object-cover select-none"
        placeholder="blur"
        priority
      />
      <Image
        src={bannerFilialMobileImage}
        alt="Logo"
        className="md:hidden w-full h-[80vw] max-h-[350px] object-cover select-none"
        placeholder="blur"
        priority
      />
    </section>
  );
};

export default WelcomeFilial;
