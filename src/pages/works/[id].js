import Loader from '@/components/Loader';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { getWork } from '@/services/apiWorks';
import { scrollOffset } from '@/utils/config';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import WorkDisplay from './WorkDisplay';
import { getArtist } from '@/services/apiArtists';
import ArtistDetails from './ArtistDetails';
import WorkDetails from './WorkDetails';
import { getExhibition } from '@/services/apiGallery';
import AdditionalDetails from './AdditionalDetails';
import Bands from '@/components/Bands';
import Footer from '@/components/Footer';

function Work() {
  const scrollPosition = useScrollPosition(scrollOffset);
  const router = useRouter();
  const { id } = router.query;

  const [isRendered, setIsRendered] = useState(false);

  const [currentWork, setCurrentWork] = useState(null);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [currentExhibition, setCurrentExhibition] = useState(null);

  useEffect(
    function () {
      async function fetchWork(id) {
        const work = await getWork(id);
        setCurrentWork(work);
        const artist = await getArtist(work.artist_id);
        setCurrentArtist(artist);
        const exhibition = await getExhibition(work.exhibition_id);
        setCurrentExhibition(exhibition);
      }
      if (id) {
        fetchWork(id);

        setIsRendered(true);
      }
    },
    [id]
  );

  if (!isRendered || !currentWork || !currentArtist || !currentExhibition)
    return <Loader />;

  return (
    <>
      <MetaTags
        title={`${
          currentWork.title +
            ' by ' +
            currentArtist.first_name +
            ' ' +
            currentArtist.last_name || 'Our Programs'
        } - 1952 Africa`}
        description={
          `${
            currentWork.title +
            ' by ' +
            currentArtist.first_name +
            ' ' +
            currentArtist.last_name
          }` || ''
        }
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <WorkDisplay work={currentWork} />
      <ArtistDetails artist={currentArtist} />
      <WorkDetails work={currentWork} exhibition={currentExhibition} />
      <AdditionalDetails work={currentWork} />
      <Bands />
      <Footer />
    </>
  );
}

export default Work;
