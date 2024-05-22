import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import SupportHero from './donate/SupportHero';
import Bands from '@/components/Bands';
import DonateContent from './donate/DonateContent';
import DonationMethods from './donate/DonationMethods';
import Footer from '@/components/Footer';
import SupportArtsAccelerator from './donate/SupportArtsAccelerator';

function Donate() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="Support African Artists and Creatives - 1952 Africa"
        description="1952 Africa is dedicated to empowering Africa's most promising artists and creatives through unconditional financial Fellowships spanning various art forms, such as Craft, Design, Literature, Film, Visual Arts, Performing Arts, and beyond. Your support is crucial in channeling funds directly to the upcoming generation of African artists, providing them with the necessary resources during this pivotal moment in their careers. Together, we can sustain and nurture their artistic endeavors."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <SupportHero />
      <Bands />
      <DonateContent />
      <DonationMethods />
      <SupportArtsAccelerator />
      <Bands />
      <Footer />
    </>
  );
}

export default Donate;
