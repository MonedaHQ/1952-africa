import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import AboutHero from './about/AboutHero';
import Bands from '@/components/Bands';
import AboutContent from './about/AboutContent';
import Footer from '@/components/Footer';
import DedicatedSpace from './about/DedicatedSpace';

function About() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="About us - 1952 Africa"
        description="Welcome to 1952 Africa, an art foundation passionately dedicated to fostering the growth and global recognition of African art. Our foundation is committed to providing a nurturing space for African artists, equipping them with the tools and resources necessary to build flourishing and internationally esteemed careers."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <AboutHero />
      <Bands />
      <AboutContent />
      <DedicatedSpace />
      <Bands />
      <Footer />
    </>
  );
}

export default About;
