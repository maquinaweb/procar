import SectionHeader from '../SectionHeader';
import Video from '../Video';

const Services: React.FC = () => {
  return (
    <section className="bg-neutral-200 text-neutral-800 w-full py-28">
      <div className="flex flex-col gap-8 container px-3 md:px-16 mx-auto">
        <SectionHeader
          title="Nossos serviços"
          description="Encontre soluções completas para aprimorar seu veículo."
        />

        <div className="flex flex-col lg:flex-row items-center gap-x-16 2xl:gap-x-40 gap-y-8">
          <div className="flex flex-col basis-1/2 gap-3">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-center sm:text-start">
              Restauração de Exterior
            </h3>
            <p className="text-sm md:text-base text-justify sm:text-start">
              Nessa caminhonete aqui, fizemos todo o exterior e
              interior dela, dá uma olhada no vídeo para vocês verem
              que legal! Exterior todo em branco pérola, muita atenção
              nos detalhes, e o interior marrom com detalhes claros.
            </p>
          </div>
          <div className="w-full lg:basis-1/2">
            <Video
              title="Silverado Branco Pérola personalizada.😱🛻"
              id="exU58wKQDdA"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-x-16 2xl:gap-x-40 gap-y-8">
          <div className="w-full lg:basis-1/2">
            <Video
              title="Silverado Branco Pérola personalizada.😱🛻"
              id="UlhY_dvID48"
            />
          </div>
          <div className="flex flex-col basis-1/2 gap-3">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-center sm:text-start">
              Troca do interior do veículo
            </h3>
            <p className="text-sm md:text-base text-justify sm:text-start">
              Caminhonete com o interior inteiro reformado, acabamento
              feito, 100% de atenção nos detalhes, multimídia 2 Din,
              troca das peças do interior com peças de fabricação
              própria. Confira o vídeo e veja como fazemos por aqui!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
