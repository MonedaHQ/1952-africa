import { usePrograms } from '@/components/features/programs/usePrograms';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import ProgramHero from './programs/ProgramHero';
import Bands from '@/components/Bands';
import ProgramsContent from './programs/ProgramsContent';
import Programs from './programs/Programs';
import Footer from '@/components/Footer';

function ProgramsIndex() {
  const scrollPosition = useScrollPosition(scrollOffset);
  const { programs, isLoading } = usePrograms();

  return (
    <>
      <MetaTags
        title="Our Programs - 1952 Africa"
        description="Our Programs at 1952 Africa are meticulously designed to empower African artists by eliminating financial barriers, offering a range of support systems that encompass mentorship, residency programs, and collaborative opportunities. We believe in nurturing creativity without constraints, ensuring every artist has the tools and resources to forge a flourishing and globally acclaimed career in the rich tapestry of African art."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <ProgramHero />
      <Bands />
      <ProgramsContent />
      <Programs programs={programs} isLoading={isLoading} />
      <Bands />
      <Footer />
    </>
  );
}

export default ProgramsIndex;
