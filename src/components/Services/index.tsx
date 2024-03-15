import SectionHeader from '../SectionHeader';
import Video from '../Video';

const Services: React.FC = () => {
  return (
    <section className="bg-neutral-200 text-neutral-800 w-full py-28">
      <div className="flex flex-col gap-8 container px-16 mx-auto">
        <SectionHeader
          title="Nossos serviços"
          description="Encontre soluções completas para aprimorar seu veículo."
        />

        <div className="grid grid-cols-2 items-center gap-x-40 gap-y-8">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-2xl">
              Restauração de Exterior
            </h3>
            <p>
              Nessa caminhonete aqui, fizemos todo o exterior e
              interior dela, dá uma olhada no vídeo para vocês verem
              que legal! Exterior todo em branco pérola, muita atenção
              nos detalhes, e o interior marrom com detalhes claros.
            </p>
          </div>
          <Video
            title="Silverado Branco Pérola personalizada.😱🛻"
            id="exU58wKQDdA"
          />
          <Video
            title="Da uma olhada no capricho desse trabalho 🔥🔝"
            id="UlhY_dvID48"
          />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-2xl">
              Troca do interior do veículo
            </h3>
            <p>
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
