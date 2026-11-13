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
        description="The Chizi Wigwe Prize for African Futurism is a $15,000 award by the 1952 Africa Foundation and the HOW Foundation, celebrating African artists who imagine the continent's future through the theme Africa in 2100."
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
