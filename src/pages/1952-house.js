import Bands from '@/components/Bands';
import Footer from '@/components/Footer';
import MetaTags from '@/components/head';
import HeadingAndParagraph from '@/components/HeadingAndParagraph';
import HeroSlider from '@/components/HeroSlider';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';

function House() {
  const scrollPosition = useScrollPosition(scrollOffset);

  const content = [
    {
      heading:
        'Welcome to the ArtHouse: The Creative Hub of 1952 Africa Art Residency',
      paragraph:
        'Nestled in the heart of Lagos,Nigeria, our ArtHouse isn’t just a place to stay—it’s a sanctuary of inspiration and creativity. Designed to be a home away from home, the 1952 Africa  ArtHouse provides a unique space where our resident artists live, work, and immerse themselves fully in their practice.The ArtHouse is at the heart of the 1952 Africa Art Residency—It’s more than just a property; it’s a cornerstone of our mission to celebrate authentic African art and empower artists with the environment they need to thrive.',
    },
    {
      heading: 'A Creative Sanctuary',
      paragraph:
        'It is designed to be a catalyst for creativity, offering our artists a unique space to experiment, collaborate, and push the boundaries of their practice. Here, residents are encouraged to explore new ideas, refine their craft, and draw inspiration from the world around them—all within a supportive and nurturing environment. This space represents our commitment to fostering artistic growth and giving African artists a platform to develop their work in a deeply immersive setting.With light-filled studios, cozy communal spaces, and serene surroundings, the ArtHouse is purpose-built to nurture artistic exploration. Every corner of the property is designed with the artist in mind, offering a perfect balance of solitude and community—a place where ideas flourish.',
    },
    {
      heading: 'Living & Creating Under One Roof',
      paragraph:
        'The ArtHouse is more than just a residence; it’s a vibrant environment where our artists connect, collaborate, and find inspiration from one another. From quiet mornings in the studios to lively discussions in the shared kitchen, every moment is an opportunity to grow. Each studio is tailored to provide the perfect environment for artistic research and production.',
    },
    {
      heading: 'Immersed in the Local Scene',
      paragraph:
        'Located just minutes away from some of Lagos most dynamic cultural hotspots, the ArtHouse offers easy access to galleries, museums, and local art communities, allowing our residents to be constantly inspired by the pulse of the city.The ArtHouse embodies the spirit of 1952 Africa—championing African art and artists in a setting that bridges tradition and innovation. It provides a physical space where our mission comes alive, enabling artists to focus entirely on their work without the distractions of everyday life. This residence is an incubator for creativity, a hub for cultural exchange, and a testament to our dedication to nurturing the next generation of African art.',
    },
    {
      heading: null,
      paragraph:
        'By bringing artists together under one roof, the ArtHouse fosters a vibrant community where ideas flow freely, collaborations form organically, and artistic breakthroughs happen daily. It’s not just about creating art; it’s about creating opportunities, building networks, and contributing to the broader narrative of African art on the global stage.',
    },
    {
      heading: null,
      paragraph:
        'Here, creativity knows no bounds. Follow our artists’ journey as they transform the ArtHouse into a living canvas, and watch as their ideas evolve within this extraordinary space.',
    },
  ];
  return (
    <>
      <MetaTags
        title="The 1952 House - 1952 Africa"
        description="Nestled in the heart of Lagos,Nigeria, our ArtHouse isn’t just a place to stay—it’s a sanctuary of inspiration and creativity. Designed to be a home away from home, the 1952 Africa  ArtHouse provides a unique space where our resident artists live, work, and immerse themselves fully in their practice.The ArtHouse is at the heart of the 1952 Africa Art Residency—It’s more than just a property; it’s a cornerstone of our mission to celebrate authentic African art and empower artists with the environment they need to thrive."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <HeroSlider title="The 1952 House" />
      <Bands />
      <HeadingAndParagraph content={content} />
      <Footer />
    </>
  );
}

export default House;
