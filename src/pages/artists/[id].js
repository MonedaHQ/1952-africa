import Loader from '@/components/Loader';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { getArtist } from '@/services/apiArtists';
import { scrollOffset } from '@/utils/config';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArtistMain from './ArtistMain';
import { getActivity } from '@/services/apiPrograms';
import { getSpecificWorks } from '@/services/apiWorks';
import HeadingAndParagraph from '@/components/HeadingAndParagraph';
import ArtistWorks from './ArtistWorks';
import Bands from '@/components/Bands';
import Footer from '@/components/Footer';

function Artist() {
  const router = useRouter();
  const { id } = router.query;

  const page = router.query.page || 1;

  const scrollPosition = useScrollPosition(scrollOffset);

  const [isRendered, setIsRendered] = useState(false);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [currentWorks, setCurrentWorks] = useState(null);

  useEffect(
    function () {
      async function fetchArtist(id) {
        const artist = await getArtist(id);
        setCurrentArtist(artist);
        const activity = await getActivity(artist.activity_id);
        setCurrentActivity(activity);
        const works = await getSpecificWorks({ artist_id: id, page });
        setCurrentWorks(works);
      }
      if (id) {
        fetchArtist(id);
        setIsRendered(true);
      }
    },
    [id, page]
  );

  if (!isRendered || !currentArtist || !currentActivity || !currentWorks)
    return (
      <Loader
        title="Our Artists - 1952 Africa"
        description="Discover our amazing talents"
      />
    );

  const artistName = `${currentArtist?.first_name || 'Loading'} ${
    currentArtist?.last_name || '...'
  }`;

  return (
    <>
      <MetaTags
        title={`${artistName || 'Our Artists'} - 1952 Africa`}
        description={currentArtist?.bio || 'Loading...'}
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <ArtistMain
        artist={currentArtist}
        activity={currentActivity}
        works={currentWorks}
      />
      <HeadingAndParagraph
        content={[{ heading: null, paragraph: currentArtist.bio }]}
      />
      <ArtistWorks works={currentWorks} />
      <Bands />
      <Footer />
    </>
  );
}

export default Artist;
