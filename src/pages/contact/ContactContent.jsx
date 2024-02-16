import HeadingAndParagraph from '@/components/HeadingAndParagraph';

function ContactContent() {
  const content = [
    {
      heading: null,
      paragraph:
        "Want to know more? Ask away! Our friendly team is just a quick message away. Fill out the contact form and we'll get back to you in a flash. ",
    },
  ];

  return <HeadingAndParagraph content={content} />;
}

export default ContactContent;
