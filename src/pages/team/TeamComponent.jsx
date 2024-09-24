import Section from '@/components/Section';
import Image from 'next/image';

import styles from './styles/teamComponent.module.css';

function TeamComponent({ heading, paragraph, teamArray }) {
  return (
    <Section>
      <div className={styles.main}>
        <Heading heading={heading} paragraph={paragraph} />
        <TeamMembers teamArray={teamArray} />
      </div>
    </Section>
  );
}

function Heading({ heading, paragraph }) {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.heading}>
        <h4>{heading}</h4>
      </div>
      {paragraph && <p>{paragraph}</p>}
    </div>
  );
}

function TeamMembers({ teamArray }) {
  if (!teamArray) return;
  return (
    <div className={styles.membersContainer}>
      {teamArray.map((member) => (
        <Member member={member} key={member.name} />
      ))}
    </div>
  );
}

function Member({ member }) {
  const { imageData, name, paragraph } = member;
  const { src, alt } = imageData;

  return (
    <div className={styles.member}>
      <div className={styles.imageContainer}>
        <Image src={src} alt={alt} width={390} height={315} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default TeamComponent;
