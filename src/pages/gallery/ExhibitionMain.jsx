import Section from '@/components/Section';
import styles from './styles/exhibitionmain.module.css';
import Image from 'next/image';
import { PiCalendarLight } from 'react-icons/pi';
import Loader from '@/components/Loader';

function ExhibitionMain({ exhibition }) {
  if (!exhibition) return <Loader />;
  return (
    <Section>
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            width={280}
            height={280}
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
