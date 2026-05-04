import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import Bands from '@/components/Bands';
import Footer from '@/components/Footer';
import AdebolaMemorial from '@/components/memorial/AdebolaMemorial';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';

function AdebolaEwaoluwaAdesanya() {
  const scrollPosition = useScrollPosition(scrollOffset);

  return (
    <>
      <MetaTags
        title="Adebola Ewaoluwa Adesanya Memorial - 1952 Africa"
        description="A memorial page honouring the life and memory of Adebola Ewaoluwa Adesanya."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <AdebolaMemorial />
      <Bands />
      <Footer />
    </>
  );
}

export default AdebolaEwaoluwaAdesanya;
