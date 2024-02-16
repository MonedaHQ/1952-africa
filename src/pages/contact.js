import Bands from '@/components/Bands';
import HeroSlider from '@/components/HeroSlider';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import { slideshowImages } from '@/data/slideshowImages';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import ContactContent from './contact/ContactContent';
import ContactForm from './contact/ContactForm';
import Footer from '@/components/Footer';

function Contact() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="Contact us - 1952 Africa"
        description="We'd love to hear from you"
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <HeroSlider array={slideshowImages} title="Contact us" />
      <Bands />
      <ContactContent />
      <ContactForm />
      <Bands />
      <Footer />
    </>
  );
}

export default Contact;
