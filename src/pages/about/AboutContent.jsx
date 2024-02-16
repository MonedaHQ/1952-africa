import HeadingAndParagraph from '@/components/HeadingAndParagraph';

function AboutContent() {
  const content = [
    {
      heading: null,
      paragraph:
        'Welcome to 1952 Africa, an art foundation passionately dedicated to fostering the growth and global recognition of African art. Our foundation is committed to providing a nurturing space for African artists, equipping them with the tools and resources necessary to build flourishing and internationally esteemed careers.',
    },
    {
      heading: 'Our Mission',
      paragraph:
        'At 1952 Africa, we are driven by a deep commitment to celebrating African art, culture, and history. We strive to support diverse forms of artistic expression emerging from Africa. Our vision is to create an ecosystem where artists can not only survive but thrive, breaking free from the constraints often imposed by local environments.',
    },
    {
      heading: 'Our Vision',
      paragraph:
        'Our vision is to redefine African narratives through art, fostering creativity, and igniting a cultural renaissance.',
    },
  ];
  return (
    <>
      <HeadingAndParagraph content={content} />
    </>
  );
}

export default AboutContent;
