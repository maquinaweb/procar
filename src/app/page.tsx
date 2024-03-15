import Brands from '@/components/Brands';
import Welcome from '@/components/Welcome';

function Home() {
  return (
    <main className="flex flex-col bg-neutral-50 gap-12">
      <Welcome />

      <Brands />
    </main>
  );
}

export default Home;
