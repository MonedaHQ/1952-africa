import Loader from '@/components/Loader';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { getWork } from '@/services/apiWorks';
import { scrollOffset } from '@/utils/config';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InquirePage from './InquirePage';
import Bands from '@/components/Bands';
import Footer from '@/components/Footer';
import { getArtist } from '@/services/apiArtists';

function Inquire() {
  const router = useRouter();
  const { id } = router.query;

  const [isRendered, setIsRendered] = useState(false);
  const [currentWork, setCurrentWork] = useState(null);
  const [currentArtist, setCurrentArtist] = useState(null);

  const scrollPosition = useScrollPosition(scrollOffset);

  useEffect(
    function () {
      async function fetchWork(id) {
        const work = await getWork(id);
        setCurrentWork(work);
        const artist = await getArtist(work.artist_id);
        setCurrentArtist(artist);
      }
      if (id) {
        fetchWork(id);
        setIsRendered(true);
      }
    },
    [id]
  );

  if (!isRendered || !currentWork || !currentArtist) return <Loader />;

  return (
    <>
      <MetaTags
        title={`${null || 'Our Exhibition'} - 1952 Africa`}
        description={null || 'Loading...'}
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <InquirePage work={currentWork} artist={currentArtist} />
      <Bands />
      <Footer />
    </>
  );
}

export default Inquire;
