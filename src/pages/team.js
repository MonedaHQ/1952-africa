import Bands from '@/components/Bands';
import MetaTags from '@/components/head';
import HeadingAndParagraph from '@/components/HeadingAndParagraph';
import HeroSlider from '@/components/HeroSlider';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';
import TeamComponent from './team/TeamComponent';
import Footer from '@/components/Footer';

const content = [
  {
    heading: 'Meet the Visionaries Behind 1952 Africa ',
    paragraph:
      'At 1952 Africa, our strength lies in the passionate and diverse individuals who make up our board and team. Each member brings a unique perspective, expertise, and dedication that drives our mission to celebrate and elevate African art. Here’s a look at the incredible people leading our journey.',
  },
];

const teamMembers = {
  heading: 'Board of Trustees: Guiding the Vision',
  paragraph:
    'Our Board of Trustees oversees the strategic direction of the residency, providing governance, support, and accountability. Each member brings invaluable insights from their distinguished careers, contributing to the overall growth and sustainability of the foundation. They are the stewards of our mission, ensuring that every decision aligns with our values and long-term goals.',
  teamArray: [
    {
      imageData: { src: '/assets/team/ejike.jpg', alt: 'Ejike' },
      name: 'Ejike Egbuagbe',
      paragraph:
        'Founder of 1952 Africa and a driving force behind the residency’s vision, Ejike Egbuagu’s leadership has been instrumental in creating a platform that amplifies African voices in the art world. With a deep passion for art and a commitment to cultural preservation, Ejike’s dedication to nurturing African talent continues to inspire our work. His vision for 1952 Africa goes beyond the residency—it’s about creating lasting impact, empowering artists, and redefining the narrative of African art on a global stage.',
    },
    {
      imageData: { src: '/assets/team/ejike.jpg', alt: 'Ejike' },
      name: 'Ego Okoye',
      paragraph:
        'A dedicated advocate for the arts, Ego Okoye brings her deep understanding of cultural dynamics and her commitment to supporting African talent to our board. Ego’s strategic insight and unwavering passion for promoting African art make her a vital force in guiding the residency’s growth and outreach.',
    },
  ],
};

const boardMembers = {
  heading: 'Meet Our Advisory Board Members',
  paragraph: null,
  teamArray: [
    {
      imageData: { src: '/assets/team/ejike.jpg', alt: 'Ejike' },
      name: 'Akinbayo Atere',
      paragraph:
        'Akinbayo Atere, a Finance & Business Advisory professional, brings a unique perspective to our Advisory Board. While his professional background is rooted in finance, Akinbayo’s role at 1952 Africa is driven by his passion for the arts and his commitment to supporting emerging African talent. His involvement goes beyond numbers; he provides thoughtful mentorship and strategic advice that enriches the residency’s creative environment.',
    },
    {
      imageData: { src: '/assets/team/ejike.jpg', alt: 'Ejike' },
      name: 'Ugomah Ebilah',
      paragraph:
        'Ugomah Ebilah is a corporate finance professional turned creative entrepreneur, renowned for her dynamic taste-making and community-building efforts. Her experience bridges the worlds of finance and art, bringing a unique blend of business acumen and creative insight to our Advisory Board. Ugomah’s commitment to supporting artists and her ability to create meaningful connections within the art community make her a vital contributor to our mission.',
    },
  ],
};

function Team() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="Our People - 1952 Africa"
        description="Meet the Visionaries Behind 1952 Africa  - At 1952 Africa, our strength lies in the passionate and diverse individuals who make up our board and team. Each member brings a unique perspective, expertise, and dedication that drives our mission to celebrate and elevate African art. Here’s a look at the incredible people leading our journey:"
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <HeroSlider title="Our People" />
      <Bands />
      <HeadingAndParagraph content={content} />
      <TeamComponent
        heading={teamMembers.heading}
        paragraph={teamMembers.paragraph}
        teamArray={teamMembers.teamArray}
      />
      <TeamComponent
        heading={boardMembers.heading}
        paragraph={boardMembers.paragraph}
        teamArray={boardMembers.teamArray}
      />
      <Bands />
      <Footer />
    </>
  );
}

export default Team;
