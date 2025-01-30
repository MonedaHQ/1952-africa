import Section from '@/components/Section';
import styles from './styles/chiziwigwe.module.css';
import Image from 'next/image';
import { chizigrantdata } from '@/data/chizigrantdata';

function ChiziHero() {
  return (
    <Section>
      <main className={styles.main}>
        <HeroImage />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: chizigrantdata }}
        />
      </main>
    </Section>
  );
}

function HeroImage() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/images/chizi-wigwe-launch.jpg"
        width={500}
        height={500}
        alt="Chizi Wigwe Prize Launch"
        className={styles.image}
      />
      <p>Image from the Chizi Wigwe Prize Launch</p>
    </div>
  );
}

export default ChiziHero;
