import { artistsWorkshop } from '@/data/artistWorkshop';

import HeroSlider from '@/components/HeroSlider';

function AboutHero() {
  return <HeroSlider array={artistsWorkshop} title="About us" />;
}

export default AboutHero;
