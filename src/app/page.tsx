import Brands from '@/components/Brands';
import OurNumbers from '@/components/OurNumbers';
import Welcome from '@/components/Welcome';

function Home() {
  return (
    <main className="flex flex-col bg-neutral-50 gap-12">
      <Welcome />

      <Brands />

      <OurNumbers />
    </main>
  );
}

export default Home;
