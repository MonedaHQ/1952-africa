import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import ChiziHero from './chizi-wigwe-prize/ChiziHero';
import Bands from '@/components/Bands';
import Footer from '@/components/Footer';

function ChiziWigwePrize() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="The Chizi Wigwe Prize - 1952 Africa"
        description="The 1952 Africa Foundation, in partnership with the HOW Foundation, is pleased to announce the inaugural Chizi Wigwe Prize for African Futurism. This prestigious prize seeks to empower African artists and creatives to envision a brighter future for the continent through innovative artistic expressions. "
      />
      <Navigation scrollPosition={scrollPosition} />
      <BurgerNavigation />
      <ChiziHero />
      <Bands />
      <Footer />
    </>
  );
}

export default ChiziWigwePrize;
