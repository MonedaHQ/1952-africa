import HeadingAndParagraph from '@/components/HeadingAndParagraph';

function DonateContent() {
  const content = [
    {
      heading: 'Support African Artists and Creatives',
      paragraph:
        " 1952 Africa is dedicated to empowering Africa's most promising artists and creatives through unconditional financial Fellowships spanning various art forms, such as Craft, Design, Literature, Film, Visual Arts, Performing Arts, and beyond. Your support is crucial in channeling funds directly to the upcoming generation of African artists, providing them with the necessary resources during this pivotal moment in their careers. Together, we can sustain and nurture their artistic endeavors.",
    },
  ];
  return <HeadingAndParagraph content={content} />;
}

export default DonateContent;
