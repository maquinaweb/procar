import { Metadata } from 'next';

import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NewBranch from '@/components/NewBranch';
import WelcomeFilial from '@/components/WelcomeFilial';

function Filial() {
  return (
    <>
      <Header theme="light" />

      <main className="flex flex-col bg-neutral-50">
        <WelcomeFilial />

        <Benefits />

        <NewBranch />
      </main>

      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Filial - Procar Prime'
};

export default Filial;
