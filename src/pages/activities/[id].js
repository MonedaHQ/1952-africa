import Bands from '@/components/Bands';
import HeroSlider from '@/components/HeroSlider';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import { artistsWorkshop } from '@/data/artistWorkshop';
import useScrollPosition from '@/hooks/useScrollPosition';
import { getSpecificArtists } from '@/services/apiArtists';
import { getActivity, getProgram } from '@/services/apiPrograms';
import { scrollOffset } from '@/utils/config';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MainSection from './MainSection';
import ActivityContent from './ActivityContent';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

function Activity() {
  const router = useRouter();
  const scrollPosition = useScrollPosition(scrollOffset);

  const [isRendered, setIsRendered] = useState(false);

  const [currentActivity, setCurrentActivity] = useState(null);
  const [currentProgram, setCurrentProgram] = useState(null);
  const [artists, setArtists] = useState(null);
  const [activityId, setActivityId] = useState(null);

  const { id } = router.query;

  useEffect(
    function () {
      async function fetchPrograms(id) {
        const activity = await getActivity(id);
        setCurrentActivity(activity);
        const program = await getProgram(activity.program_id);
        setCurrentProgram(program);
        const artists = await getSpecificArtists({
          program_id: program.id,
          activity_id: activity.id,
        });
        setArtists(artists);
      }
      if (id) {
        fetchPrograms(id);
        setActivityId(id);
        setIsRendered(true);
      }
    },
    [id]
  );

  if (!currentActivity || !currentProgram || !artists || !isRendered)
    return <Loader />;

  return (
    <>
      <MetaTags
        title={`${currentActivity?.title || 'Our Programs'} - 1952 Africa`}
        description={currentActivity?.description || ''}
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <MainSection
        activity={currentActivity}
        program={currentProgram}
        artists={artists}
      />
      <ActivityContent activity={currentActivity} artists={artists} />
      <Bands />
      <Footer />
    </>
  );
}

export default Activity;
