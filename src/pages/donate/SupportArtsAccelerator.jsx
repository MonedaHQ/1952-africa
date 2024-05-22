import HeadingAndParagraph from '@/components/HeadingAndParagraph';

import { AiOutlineUser } from 'react-icons/ai';

import Section from '@/components/Section';
import SponsorshipBenefitList from '@/components/SponsorshipBenefitList';

import styles from './styles/supportartsaccelerator.module.css';
import { PiUsersFourLight } from 'react-icons/pi';

function SupportArtsAccelerator() {
  const contentTop = [
    {
      heading:
        'Sponsor the 2024 edition of the 1952 Africa Art Accelerator Program',
      paragraph:
        ' We invite you to become a valued sponsor of the 1952 Africa Arts Accelerator, supporting as an individual or corporate entity with either value or its cash equivalent. By supporting our program, you will not only play a pivotal role in the development of African art but also in supporting our dedication to the cultural and artistic enrichment of Africa. ',
    },
  ];

  const sponsorshipListContent = {
    icon: null,
    title: 'Sponsorship Package',
    listArray: [
      'Sponsor the support team of mentors, instructors and jurors',
      'Sponsor the round trip for artists to and fro the accelerator',
      'Sponsor the production cost of work and purchase of work tools',
      'Sponsor accommodation expenses for the cohort ',
      'Sponsor the logistics cost for gallery, studio and museum visits for the cohort ',
      "Sponsor the artists' stipend ",
      ' Sponsor breakfast and lunch for the cohort ',
      'Sponsor the final exhibition showcase of the cohort ',
    ],
  };

  return (
    <div>
      <HeadingAndParagraph content={contentTop} />
      <Section>
        <SponsorshipBenefitList
          icon={sponsorshipListContent.icon}
          title={sponsorshipListContent.title}
          listArray={sponsorshipListContent.listArray}
        />
      </Section>
      <SponsorBenefits />
    </div>
  );
}

function SponsorBenefits() {
  const listAssets = [
    {
      icon: <AiOutlineUser />,
      title: 'Individual Sponsors',
      listArray: [
        'VIP access to private previews',
        'Monthly gallery tours',
        'Discounts on art purchases and merchandise',
        'Free access to the library',
        'Discounted per diem space rental',
        'Insightful newsletters',
        'Free exhibition access',
        'Art & creative consulting',
        'Feature in dedicated press releases and social media and other media materials',
        'Opportunity to speak at the accelerator’s opening and closing ceremonies',
      ],
    },
    {
      icon: <PiUsersFourLight />,
      title: 'Corporate Sponsors',
      listArray: [
        'VIP access to private previews',
        'Monthly staff gallery tours',
        'Discounts on art purchases and merchandise for company',
        'Free access to the library',
        'Discounted per diem space rental for company events',
        'Insightful newsletters',
        'Free exhibition access to staff',
        'Art & creative consulting for company',
        'Feature in dedicated press releases and social media and other media materials',
        'Prominent logo placement on all promotional materials, event banners, and the foundation"s website',
        "Opportunity to speak at the accelerator's opening and closing ceremonies",
      ],
    },
  ];

  return (
    <Section>
      <div className={styles.listContainer}>
        {listAssets.map((item) => (
          <div className={styles.listBox} key={item.title}>
            <SponsorshipBenefitList
              icon={item.icon}
              title={item.title}
              listArray={item.listArray}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default SupportArtsAccelerator;
