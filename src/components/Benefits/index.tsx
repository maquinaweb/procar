import { BsMegaphone } from 'react-icons/bs';
import { FaGear, FaMoneyBillWave } from 'react-icons/fa6';

import SectionHeader from '../SectionHeader';

const Benefits: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 container px-3 py-14 lg:py-28 mx-auto text-neutral-800">
      <SectionHeader
        title="Benefícios"
        description="Aqui só tem benefícios, mas os principais são:"
      />

      <ul className="grid grid-cols-3 justify-between gap-2 sm:gap-6">
        <li className="flex flex-col items-center gap-2">
          <FaMoneyBillWave size={42} />
          <p className="text-xs sm:text-sm md:text-base text-center font-medium md:w-3/4">
            Modelo de Negócio Lucrativo
          </p>
        </li>
        <li className="flex flex-col items-center gap-2">
          <FaGear size={42} />
          <p className="text-xs sm:text-sm md:text-base text-center font-medium md:w-3/4">
            Acesso a Tecnologias Única e Tendências de Restauração
          </p>
        </li>
        <li className="flex flex-col items-center gap-2">
          <BsMegaphone size={42} />
          <p className="text-xs sm:text-sm md:text-base text-center font-medium md:w-3/4">
            Marketing Nacional e Suporte de Marca
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
