import { NextPage } from 'next';
import { notFound } from 'next/navigation';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ListWorks from '@/components/ListWorks';
import WorkImage from '@/components/WorkImage';
import { works } from '@/data/works';

const Obra: NextPage<{
  params: {
    id: string;
  };
}> = ({ params }) => {
  const work = works[Number(params.id)];

  if (!work) {
    notFound();
  }

  return (
    <>
      <Header theme="light" />

      <main className="flex flex-col bg-neutral-50 py-12 xl:pb-28 xl:pt-20">
        <section className="container gap-12 flex flex-col-reverse items-center lg:items-start lg:flex-row mx-auto px-3">
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-3xl font-bold text-neutral-800">
              {work.title}
            </h1>

            <p className="text-neutral-500 whitespace-pre-wrap">
              {work.description}
            </p>
          </div>
          <div className="flex-1 max-w-2xl lg:max-w-none grid grid-cols-12 auto-rows-[auto_1fr] w-full gap-4">
            <div className="relative col-span-12 h-fit xl:col-span-10 aspect-video">
              <WorkImage image={work.images[0]} work={work} />
            </div>
            <div className="col-span-12 h-fit flex gap-2 w-full xl:flex-col xl:col-span-2">
              {work.images.map((image, index) => (
                <div
                  className="relative w-full aspect-[36/25] h-auto"
                  key={`image-${index}`}
                >
                  <WorkImage
                    key={`image-${index}`}
                    image={image}
                    work={work}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ListWorks />
      </main>

      <Footer />
    </>
  );
};

export default Obra;
