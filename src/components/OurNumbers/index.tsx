import { FaRegHandshake } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';
import { LiaTruckPickupSolid } from 'react-icons/lia';

import SectionHeader from '../SectionHeader';

const OurNumbers: React.FC = () => {
  return (
    <section className="bg-neutral-200 text-neutral-800 w-full py-20">
      <div className="flex flex-col gap-8 container mx-auto">
        <SectionHeader
          title="Nossos números"
          description="Veja o que define nossa jornada e compromisso com a excelência."
        />

        <ul className="flex justify-between">
          <li className="flex flex-col items-center gap-2">
            <FiCalendar size={42} />
            <p className="text-xl text-center font-medium w-3/4">
              +de <b>10 anos</b> de existência
            </p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <FaRegHandshake size={42} />
            <p className="text-xl text-center font-medium w-3/4">
              +de <b>300 Clientes</b> Satisfeitos
            </p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <LiaTruckPickupSolid size={42} />
            <p className="text-xl text-center font-medium w-3/4">
              +de <b>1000 Reformas</b> Concluidas
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurNumbers;