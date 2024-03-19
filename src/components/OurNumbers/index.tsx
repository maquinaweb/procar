import { FaRegHandshake } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';
import { LiaTruckPickupSolid } from 'react-icons/lia';

import CounterNumberCrescent from '../CounterNumber';
import InView from '../InView';
import SectionHeader from '../SectionHeader';

const OurNumbers: React.FC = () => {
  return (
    <section
      id="numeros"
      className="bg-neutral-200 text-neutral-800 w-full py-14 lg:py-28"
    >
      <div className="flex flex-col gap-8 container px-3 max-w-5xl mx-auto">
        <SectionHeader
          title="Nossos números"
          description="Veja o que define nossa jornada e compromisso com a excelência."
        />

        <ul className="flex justify-between gap-2 sm:gap-6">
          <InView>
            <li className="flex flex-col items-center gap-2">
              <FiCalendar size={42} />
              <p className="text-xs sm:text-sm md:text-xl text-center font-medium md:w-3/4">
                +de{' '}
                <b>
                  <CounterNumberCrescent number={10} duration={2} />{' '}
                  anos
                </b>{' '}
                de existência
              </p>
            </li>
          </InView>
          <InView>
            <li className="flex flex-col items-center gap-2">
              <FaRegHandshake size={42} />
              <p className="text-xs sm:text-sm md:text-xl text-center font-medium md:w-3/4">
                +de{' '}
                <b>
                  <CounterNumberCrescent number={300} duration={2} />{' '}
                  Clientes
                </b>{' '}
                Satisfeitos
              </p>
            </li>
          </InView>
          <InView>
            <li className="flex flex-col items-center gap-2">
              <LiaTruckPickupSolid size={42} />
              <p className="text-xs sm:text-sm md:text-xl text-center font-medium md:w-3/4">
                +de{' '}
                <b>
                  <CounterNumberCrescent number={1000} duration={2} />{' '}
                  Reformas
                </b>{' '}
                Concluidas
              </p>
            </li>
          </InView>
        </ul>
      </div>
    </section>
  );
};

export default OurNumbers;
