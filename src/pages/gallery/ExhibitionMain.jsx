import Section from '@/components/Section';
import styles from './styles/exhibitionmain.module.css';
import Image from 'next/image';
import { PiCalendarLight } from 'react-icons/pi';

function ExhibitionMain({ exhibition }) {
  return (
    <Section>
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            width={200}
            height={200}
            src={exhibition.image_url}
            alt={exhibition.title}
            className={styles.image}
          />
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span>Exhibition</span>
          </li>
          <li className={styles.item}>
            <h3>{exhibition.title}</h3>
          </li>
          <li className={styles.item}>
            <PiCalendarLight /> <p>{exhibition.year}</p>
          </li>
        </ul>
      </main>
    </Section>
  );
}

export default ExhibitionMain;
