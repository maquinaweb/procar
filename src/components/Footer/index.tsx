import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';

import { socialMedia } from '@/data/socialMedia';
import iconImage from '@/public/icon.png';
import logoMWImage from '@/public/logo-mw.svg';

const Footer: React.FC = () => {
  return (
    <footer className="flex bg-neutral-800 text-neutral-50">
      <div className="container mx-auto px-3 py-12 gap-5 flex flex-col text-sm">
        <div className="grid lg:grid-cols-2 gap-8 lg:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/">
              <Image
                src={iconImage}
                alt="Logo image"
                className="w-32 lg:w-32 xl:w-44"
              />
            </Link>
            <p className="flex-1">
              A Procar é uma empresa renomada com 10 anos de
              experiência, especializada na restauração e fabricação
              de peças para carros antigos. Sua equipe de
              especialistas comprometidos busca oferecer o melhor para
              veículos clássicos, utilizando exclusivamente peças de
              fabricação próprias de alta qualidade e técnicas
              avançadas para garantir resultados excepcionais em cada
              projeto.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row xl:gap-12 justify-between">
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 items-center">
                <div className="w-fit h-fit cursor-pointer border border-neutral-50 rounded-full p-2 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">
                  <FaLocationDot />
                </div>
                Rua Martinópolis, 780 - Jardim Del Rey, Catanduva -
                SP, 15800-050
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-fit h-fit cursor-pointer border border-neutral-50 rounded-full p-2 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">
                  <FaClock />
                </div>
                Seg - Sex 8h às 18h
              </li>
              <div className="flex flex-col lg:flex-row gap-4">
                <li className="flex gap-2 items-center">
                  <div className="w-fit h-fit cursor-pointer border border-neutral-50 rounded-full p-2 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">
                    <FaPhone />
                  </div>
                  0800 444 1144
                </li>
                <li className="flex gap-2 items-center">
                  <div className="w-fit h-fit cursor-pointer border border-neutral-50 rounded-full p-2 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">
                    <TbMailFilled />
                  </div>
                  procar.automotiva@hotmail.com
                </li>
              </div>
            </ul>
            <ul className="flex justify-center lg:flex-col gap-3">
              {socialMedia.map((social, index) => (
                <Link
                  key={`social-${index}`}
                  href={social.link}
                  target="_blank"
                  className="w-fit h-fit"
                >
                  <li className="w-fit h-fit cursor-pointer border border-neutral-50 rounded-full p-2 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">
                    <social.icon />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        <div className="flex flex-col items-center gap-8 md:gap-4 md:flex-row justify-between text-center">
          <p>
            &copy; {new Date().getFullYear()} Pente Redondo. Todos os
            direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <p>Desenvolvido por</p>
            <Link
              href="https://www.maquinaweb.com.br"
              target="_blank"
            >
              <Image
                src={logoMWImage}
                alt="Logo mw image"
                className="h-4 sm:h-5 lg:h-6 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
