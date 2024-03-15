import Image from 'next/image';

import welcomeBackgroundImage from '@/public/welcome-background.jpeg';

const Welcome: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full h-auto aspect-[16/5]">
      <Image
        src={welcomeBackgroundImage}
        alt="Logo"
        className="w-full h-auto object-cover select-none"
        placeholder="blur"
        priority
      />
    </section>
  );
};

export default Welcome;
