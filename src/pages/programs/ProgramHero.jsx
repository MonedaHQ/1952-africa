import HeroSlider from '@/components/HeroSlider';
import { artistsWorkshop } from '@/data/artistWorkshop';

function ProgramHero() {
  return <HeroSlider array={artistsWorkshop} title="Our Programs" />;
}

export default ProgramHero;
