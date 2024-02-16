import Bands from '@/components/Bands';
import HeroSlider from '@/components/HeroSlider';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import RaffleContent from './raffle/RaffleContent';
import { raffleData } from '@/data/raffledata';
import RaffleForm from './raffle/RaffleForm';
import Footer from '@/components/Footer';

function Raffle() {
  const scrollPosition = useScrollPosition(scrollOffset);
  const raffleItem = [raffleData.photo];

  return (
    <>
      <MetaTags
        title="The 1952 Africa Raffle - 1952 Africa"
        description="The 1952 Africa Raffle Draw provides a unique opportunity for you to own a valuable piece of art and support a good cause at the same time!"
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <HeroSlider array={raffleItem} title="The 1952 Africa Raffle" />
      <Bands />
      <RaffleContent />
      <RaffleForm />
      <Bands />
      <Footer />
    </>
  );
}

export default Raffle;
