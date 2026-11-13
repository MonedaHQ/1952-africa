import Image from 'next/image';

import Reveal from '@/components/Reveal';
import Section from '@/components/Section';

import styles from './styles/dedicatedspace.module.css';

function DedicatedSpace() {
  return (
    <Section>
      <div className={styles.main}>
        <Reveal as="figure" className={styles.imageContainer}>
          <Image
            src="/images/ezim.jpg"
            width={729}
            height={537}
            alt="Ezim Julia Egbuagu-Ugwu"
            sizes="(max-width: 800px) 100vw, 440px"
            draggable={false}
          />
          <figcaption>Ezim Julia Egbuagu-Ugwu · b. 1952</figcaption>
        </Reveal>
        <Reveal className={styles.caption} delay={0.1}>
          <span className="eyebrow">In loving memory</span>
          <p>
            The 1952 Africa space, dedicated to the loving memory of Ezim Julia
            Egbuagu-Ugwu, born July 1, 1952 in Ngwo, Enugu State, Nigeria. A
            lover of the people.
          </p>
          <span className={styles.ezim}>#ezimliveson</span>
        </Reveal>
      </div>
    </Section>
  );
}

export default DedicatedSpace;
