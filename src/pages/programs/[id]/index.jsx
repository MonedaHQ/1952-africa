import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { artistsWorkshop } from '@/data/artistWorkshop';
import { getProgram } from '@/services/apiPrograms';
import { scrollOffset } from '@/utils/config';

import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import HeroSlider from '@/components/HeroSlider';
import Bands from '@/components/Bands';
import HeadingAndParagraph from '@/components/HeadingAndParagraph';
import Activities from './Activities';
import Footer from '@/components/Footer';

function Program() {
  const router = useRouter();
  const scrollPosition = useScrollPosition(scrollOffset);
  const [isRendered, setIsRendered] = useState(false);

  const [currentProgram, setCurrentProgram] = useState([]);
  const [programId, setProgramId] = useState(null);

  const { id } = router.query;

  useEffect(
    function () {
      async function fetchPrograms(id) {
        const program = await getProgram(id);
        setCurrentProgram(program);
      }
      if (id) {
        fetchPrograms(id);
        setProgramId(id);
        setIsRendered(true);
      }
    },
    [id]
  );

  if (!currentProgram || !isRendered) return null;
  return (
    <>
      <MetaTags
        title={`${currentProgram?.title || 'Our Programs'} - 1952 Africa`}
        description={currentProgram?.description || ''}
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <HeroSlider
        array={artistsWorkshop}
        title={currentProgram?.title || 'Our Programs'}
      />
      <Bands />
      <HeadingAndParagraph
        content={[
          { heading: null, paragraph: currentProgram?.description || '' },
        ]}
      />
      {programId && <Activities programId={programId} />}
      <Bands />
      <Footer />
    </>
  );
}

export default Program;
