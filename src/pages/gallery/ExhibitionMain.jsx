import Image from 'next/image';
import Link from 'next/link';
import { PiArrowLeft } from 'react-icons/pi';

import Loader from '@/components/Loader';
import Section from '@/components/Section';

import styles from './styles/exhibitionmain.module.css';

function ExhibitionMain({ exhibition }) {
  if (!exhibition) return <Loader />;
  return (
    <Section>
      <div className={styles.main}>
        <Link href="/gallery" className={styles.back}>
          <PiArrowLeft aria-hidden="true" /> All exhibitions
        </Link>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className="eyebrow">Exhibition · {exhibition.year}</span>
            <h1>{exhibition.title}</h1>
          </div>
          <div className={styles.imageContainer}>
            <Image
              width={960}
              height={720}
              src={exhibition.image_url}
              alt={exhibition.title}
              sizes="(max-width: 900px) 100vw, 520px"
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ExhibitionMain;
