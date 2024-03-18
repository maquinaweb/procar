import Brands from '@/components/Brands';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import OurNumbers from '@/components/OurNumbers';
import Services from '@/components/Services';
import SocialMedia from '@/components/SocialMedia';
import Welcome from '@/components/Welcome';

function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col bg-neutral-50">
        <Welcome />

        <Brands />

        <OurNumbers />

        <Gallery />

        <Services />

        <SocialMedia />

        <ContactUs />
      </main>

      <Footer />
    </>
  );
}

export default Home;
