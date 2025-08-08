import HeroSection from './index/HeroSection';

import { motion } from 'framer-motion';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import MetaTags from '@/components/head';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import Bands from '@/components/Bands';
import HeroAbout from './index/HeroAbout';
import Raffle from '@/components/Raffle';
import Support from '@/components/Support';
import Footer from '@/components/Footer';
import ChiziWigweGrantAd from './chizi-wigwe-prize/ChiziWigweGrantAd';
import Modal from '@/components/Modal';

export default function Home() {
  const scrollPosition = useScrollPosition(scrollOffset);

  return (
    <>
      <MetaTags
        title="Home - 1952 Africa"
        description="Empowering African Creativity - Explore the essence of 1952Africa, our mission, and the incredible artistry we're empowering. Join us on this inspiring journey and see the change you're making possible."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={true} bg={false} />
      <BurgerNavigation />
      {/* <Modal /> */}
      <HeroSection />
      <Bands />
      <HeroAbout />
      <ChiziWigweGrantAd />
      {/* <Raffle /> */}
      {/* <Support /> */}
      <Bands />
      <Footer />
    </>
  );
}
