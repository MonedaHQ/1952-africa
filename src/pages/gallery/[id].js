import Bands from '@/components/Bands';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import WorkList from '@/components/features/works/WorkList';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { getExhibition } from '@/services/apiGallery';
import { getSpecificWorks } from '@/services/apiWorks';
import { scrollOffset } from '@/utils/config';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ExhibitionMain from './ExhibitionMain';
import HeadingAndParagraph from '@/components/HeadingAndParagraph';

function Exhibition() {
  const router = useRouter();
  const { id } = router.query;
  const page = router.query.page || 1;

  const [isRendered, setIsRendered] = useState(false);

  const [currentExhibition, setCurrentExhibition] = useState(null);
  const [currentWorks, setCurrentWorks] = useState(null);

  const scrollPosition = useScrollPosition(scrollOffset);

  useEffect(
    function () {
      async function fetchExhibition(id) {
        const exhibition = await getExhibition(id);
        setCurrentExhibition(exhibition);
        const works = await getSpecificWorks({ exhibition_id: id, page });
        setCurrentWorks(works);
      }
      if (id) {
        fetchExhibition(id);
        setIsRendered(true);
      }
    },
    [id, page]
  );

  if (!isRendered || !currentExhibition || !currentWorks)
    return (
      <Loader
        title="Exhibitions - 1952 Africa"
        description="Explore our amazing collections of African art"
      />
    );

  return (
    <>
      {' '}
      <MetaTags
        title={`${null || 'Our Exhibition'} - 1952 Africa`}
        description={null || 'Loading...'}
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <ExhibitionMain exhibition={currentExhibition} />
      <HeadingAndParagraph
        content={[{ heading: null, paragraph: currentExhibition.description }]}
      />
      <WorkList works={currentWorks} />
      <Bands />
      <Footer />
    </>
  );
}

export default Exhibition;
