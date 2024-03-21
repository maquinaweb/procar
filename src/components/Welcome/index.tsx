import Image from 'next/image';

import welcomeBackgroundMobileImage from '@/public/welcome-background-mobile.jpg';
import welcomeBackgroundImage from '@/public/welcome-background.jpeg';

const Welcome: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full h-auto aspect-[16/5]">
      <Image
        src={welcomeBackgroundImage}
        alt="Logo"
        className="hidden md:block w-full h-auto object-cover select-none"
        placeholder="blur"
        priority
      />
      <Image
        src={welcomeBackgroundMobileImage}
        alt="Logo"
        className="md:hidden w-full h-[80vw] max-h-[350px] object-cover select-none"
        placeholder="blur"
        priority
      />
    </section>
  );
};

export default Welcome;
