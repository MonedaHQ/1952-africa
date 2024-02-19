import Section from '@/components/Section';
import Image from 'next/image';

import styles from './styles/workdisplay.module.css';

function WorkDisplay({ work }) {
  return (
    <Section>
      <main className={styles.main}>
        <div className={styles.imageComtainer}>
          <Image
            src={work.image_url}
            width={900}
            height={1080}
            alt={work.title}
            className={styles.image}
          />
        </div>
        <div>
          <h2 className={styles.heading}>{work.title}</h2>
        </div>
      </main>
    </Section>
  );
}

export default WorkDisplay;
