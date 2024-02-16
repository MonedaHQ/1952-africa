import HeadingAndParagraph from '@/components/HeadingAndParagraph';
import { raffleData } from '@/data/raffledata';

function RaffleContent() {
  const content = [
    {
      heading: null,
      paragraph:
        'The 1952 Africa Raffle Draw provides a unique opportunity for you to own a valuable piece of art and support a good cause at the same time!',
    },
    {
      heading: 'Item on Raffle',
      paragraph: raffleData.description,
    },
  ];
  return <HeadingAndParagraph content={content} />;
}

export default RaffleContent;
