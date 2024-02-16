import Section from '@/components/Section';
import Image from 'next/image';

import styles from './styles/dedicatedspace.module.css';

function DedicatedSpace() {
  return (
    <Section>
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/ezim.jpg"
            width={770}
            height={693}
            alt="Ezim Julia Egbuagu-Ugwu"
            draggable={false}
          />
          <h4 className={styles.ezim}>#ezimliveson</h4>
        </div>
        <div className={styles.caption}>
          <p>
            The 1952 Africa space, dedicated to the loving memory of Ezim Julia
            Egbuagu-Ugwu, Born July 1, 1952 in Ngwo, Enugu State, Nigeria. A
            lover of the people.
          </p>
        </div>
      </main>
    </Section>
  );
}

export default DedicatedSpace;
