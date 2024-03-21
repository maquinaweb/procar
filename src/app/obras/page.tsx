import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import WorkCard from '@/components/WorkCard';
import { works } from '@/data/works';

function Obras() {
  return (
    <>
      <Header theme="light" />

      <main className="flex flex-col bg-neutral-50">
        <section className="container mx-auto px-3 py-12 xl:pb-36 xl:pt-28 flex flex-col gap-8">
          <SectionHeader
            title="Nossas obras"
            description="Nossa galeria de reparações!"
          />
          <ul className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {works.map((work, index) => (
              <Link href={`/obras/${index}`} key={`work-${index}`}>
                <WorkCard work={work} />
              </Link>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Obras;
