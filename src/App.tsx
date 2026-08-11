import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Univers } from '@/components/Univers';
import { Categories } from '@/components/Categories';
import { Createurs } from '@/components/Createurs';
import { Avis } from '@/components/Avis';
import { NousTrouver } from '@/components/NousTrouver';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Univers />
        <Categories />
        <Createurs />
        <Avis />
        <NousTrouver />
      </main>
      <Footer />
    </>
  );
}
