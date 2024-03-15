import Brands from '@/components/Brands';
import Gallery from '@/components/Gallery';
import OurNumbers from '@/components/OurNumbers';
import Services from '@/components/Services';
import Welcome from '@/components/Welcome';

function Home() {
  return (
    <main className="flex flex-col bg-neutral-50 gap-12">
      <Welcome />

      <Brands />

      <OurNumbers />

      <Gallery />

      <Services />
    </main>
  );
}

export default Home;
