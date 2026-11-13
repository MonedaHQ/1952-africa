import HeroSection from './index/HeroSection';

import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import MetaTags from '@/components/head';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import Footer from '@/components/Footer';
import HomeEditorial from './index/HomeEditorial';

export default function Home() {
  const scrollPosition = useScrollPosition(scrollOffset);

  return (
    <>
      <MetaTags
        title="Home - 1952 Africa"
        description="Empowering African Creativity - Explore the essence of 1952Africa, our mission, and the incredible artistry we're empowering. Join us on this inspiring journey and see the change you're making possible."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={true} />
      <BurgerNavigation />
      <HeroSection />
      <HomeEditorial />
      <Footer />
    </>
  );
}
