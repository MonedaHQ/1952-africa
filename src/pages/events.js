import Bands from '@/components/Bands';
import HeroSlider from '@/components/HeroSlider';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import EventsList from './events/EventsList';
import Footer from '@/components/Footer';

function Events() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="Our Events - 1952 Africa"
        description="Discover 1952 Africa events"
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <HeroSlider title="Our Events" />
      <Bands />
      <EventsList />
      <Bands />
      <Footer />
    </>
  );
}

export default Events;
