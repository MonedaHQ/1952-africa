import HeadingAndParagraph from '@/components/HeadingAndParagraph';

function ProgramsContent() {
  const content = [
    {
      heading: null,
      paragraph:
        'Our Programs at 1952 Africa are meticulously designed to empower African artists by eliminating financial barriers, offering a range of support systems that encompass mentorship, residency programs, and collaborative opportunities. We believe in nurturing creativity without constraints, ensuring every artist has the tools and resources to forge a flourishing and globally acclaimed career in the rich tapestry of African art.',
    },
  ];
  return (
    <>
      <HeadingAndParagraph content={content} />
    </>
  );
}

export default ProgramsContent;
