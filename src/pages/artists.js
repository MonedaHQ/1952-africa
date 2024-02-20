import Bands from '@/components/Bands';
import HeroSlider from '@/components/HeroSlider';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import SearchBar from './artists/SearchBar';
import { useEffect, useState } from 'react';
import { getSpecificArtists } from '@/services/apiArtists';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';
import AllArtists from './artists/AllArtists';
import Footer from '@/components/Footer';
import HeadingAndParagraph from '@/components/HeadingAndParagraph';

function ArtistsPage() {
  const scrollPosition = useScrollPosition(scrollOffset);

  const router = useRouter();
  const search = router.query.search || '';
  const page = router.query.page || 1;

  const [allArtists, setAllArtists] = useState(null);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(
    function () {
      async function fetchArtists() {
        const artists = await getSpecificArtists({ search, page });
        setAllArtists(artists);
      }

      fetchArtists();

      setIsRendered(true);
    },
    [search, page]
  );

  if (!allArtists || !isRendered) return <Loader />;

  return (
    <>
      <MetaTags
        title="Our Artists - 1952 Africa"
        description="Discover the diverse talents within the 1952 Africa artist community. Our artists are a collective of creative visionaries who have been a part of our enriching artistic journey. Explore their works, narratives, and the profound impact of their expressions on the cultural landscape."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <HeroSlider title="Our Artists" />
      <Bands />
      <HeadingAndParagraph
        content={[
          {
            heading: null,
            paragraph:
              'Discover the diverse talents within the 1952 Africa artist community. Our artists are a collective of creative visionaries who have been a part of our enriching artistic journey. Explore their works, narratives, and the profound impact of their expressions on the cultural landscape.',
          },
        ]}
      />
      <SearchBar />
      <AllArtists artists={allArtists} />
      <Bands />
      <Footer />
    </>
  );
}

export default ArtistsPage;
