import Bands from '@/components/Bands';
import HeadingAndParagraph from '@/components/HeadingAndParagraph';
import HeroSlider from '@/components/HeroSlider';
import Loader from '@/components/Loader';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { getExhibitions } from '@/services/apiGallery';
import { scrollOffset } from '@/utils/config';
import { useEffect, useState } from 'react';
import Exhibitions from './gallery/Exhibitions';
import Footer from '@/components/Footer';

function gallery() {
  const scrollPosition = useScrollPosition(scrollOffset);

  const [exhibitions, setExhibitions] = useState(null);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(function () {
    async function fetchExhibitions() {
      const exhibitions = await getExhibitions();
      setExhibitions(exhibitions);
    }

    fetchExhibitions();

    setIsRendered(true);
  }, []);

  if (!isRendered || !exhibitions) return <Loader />;

  return (
    <>
      <MetaTags
        title="Our Gallery - 1952 Africa"
        description="Welcome to the 1952 Africa Art Gallery, a vibrant showcase of contemporary African artistry and cultural expression. Immerse yourself in our carefully curated exhibitions, featuring a diverse array of works that celebrate the richness of African creativity."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <HeroSlider title="Our Gallery" />
      <Bands />
      <HeadingAndParagraph
        content={[
          {
            heading: null,
            paragraph:
              'Welcome to the 1952 Africa Art Gallery, a vibrant showcase of contemporary African artistry and cultural expression. Immerse yourself in our carefully curated exhibitions, featuring a diverse array of works that celebrate the richness of African creativity.',
          },
        ]}
      />
      <Exhibitions exhibitions={exhibitions} />
      <Bands />
      <Footer />
    </>
  );
}

export default gallery;
