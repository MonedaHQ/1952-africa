import HeroSlider from '@/components/HeroSlider';

import { slideshowImages } from '@/data/slideshowImages';

function SupportHero() {
  return <HeroSlider array={slideshowImages} title="Support us" />;
}

export default SupportHero;
