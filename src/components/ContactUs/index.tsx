import Link from 'next/link';
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';

import SectionHeader from '../SectionHeader';

const ContactUs: React.FC = () => {
  return (
    <section
      id="fale-conosco"
      className="bg-neutral-200 text-neutral-800 w-full py-14 lg:py-28"
    >
      <div className="flex flex-col gap-8 container px-3 md:px-16 mx-auto">
        <SectionHeader
          title="Fale conosco"
          description="Estamos aqui para responder às suas perguntas e ouvir suas sugestões. Entre em contato para uma comunicação fácil e rápida."
        />

        <div className="grid lg:grid-cols-2 items-center gap-x-16 2xl:gap-x-40 gap-y-8">
          <form className="flex flex-col gap-2">
            <input
              type="text"
              className="w-full py-2 px-4 rounded-lg text-sm placeholder:text-neutral-500 outline-none border bg-neutral-300 border-neutral-400 transition-all focus:brightness-105"
              placeholder="Nome"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                className="w-full py-2 px-4 rounded-lg text-sm placeholder:text-neutral-500 outline-none border bg-neutral-300 border-neutral-400 transition-all focus:brightness-105"
                placeholder="E-mail"
              />
              <input
                type="text"
                className="w-full py-2 px-4 rounded-lg text-sm placeholder:text-neutral-500 outline-none border bg-neutral-300 border-neutral-400 transition-all focus:brightness-105"
                placeholder="Telefone"
              />
            </div>
            <textarea
              className="w-full py-2 px-4 rounded-lg text-sm resize-none placeholder:text-neutral-500 outline-none border bg-neutral-300 border-neutral-400 transition-all focus:brightness-105"
              placeholder="Mensagem"
              rows={5}
            />

            <button className="flex mt-2 self-center h-fit w-fit rounded-md gap-3 items-center px-5 py-2 text-neutral-50 bg-red-900 text-sm font-semibold transition-all hover:brightness-90 active:brightness-110">
              Enviar
            </button>
          </form>
          <div>
            <ul className="flex flex-col gap-4 text-xs md:text-base">
              <li className="flex gap-2 items-center">
                <div className="w-fit h-fit border border-neutral-800 rounded-full p-2 hover:bg-neutral-800 hover:text-neutral-50 transition-colors">
                  <FaLocationDot />
                </div>
                Rua Martinópolis, 780 - Jardim Del Rey, Catanduva -
                SP, 15800-050
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-fit h-fit border border-neutral-800 rounded-full p-2 hover:bg-neutral-800 hover:text-neutral-50 transition-colors">
                  <FaClock />
                </div>
                Seg - Sex 8h às 18h
              </li>
              <div className="flex flex-col lg:flex-row gap-4">
                <li className="flex gap-2 items-center">
                  <Link href="tel:08004441144">
                    <div className="w-fit h-fit border border-neutral-800 rounded-full p-2 hover:bg-neutral-800 hover:text-neutral-50 transition-colors">
                      <FaPhone />
                    </div>
                  </Link>
                  <Link href="tel:08004441144">0800 444 1144</Link>
                </li>
                <li className="flex gap-2 items-center">
                  <Link href="mailto:contato@procarprime.com.br">
                    <div className="w-fit h-fit border border-neutral-800 rounded-full p-2 hover:bg-neutral-800 hover:text-neutral-50 transition-colors">
                      <TbMailFilled />
                    </div>
                  </Link>
                  <Link href="mailto:contato@procarprime.com.br">
                    procar.automotiva@hotmail.com
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
