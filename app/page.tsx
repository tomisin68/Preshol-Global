import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Mission from '@/components/Mission';
import Founder from '@/components/Founder';
import ImpactStats from '@/components/ImpactStats';
import Programs from '@/components/Programs';
import Footprint from '@/components/Footprint';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import SDG from '@/components/SDG';
import WhatWeDo from '@/components/WhatWeDo';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSlider />
        <Mission />
        <Founder />
        <ImpactStats />
        <Programs />
        <Footprint />
        <Gallery />
        <Testimonials />
        <SDG />
        <WhatWeDo />
        <ContactForm />
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  );
}
