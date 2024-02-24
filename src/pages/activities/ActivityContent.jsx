import { motion, useInView } from 'framer-motion';
import Section from '@/components/Section';
import styles from './styles/activitycontent.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { slide } from '@/utils/anim';
import Empty from '@/components/Empty';
import Loader from '@/components/Loader';

function ActivityContent({ activity, artists }) {
  if (!activity || !artists) return <Loader />;
  return (
    <Section>
      <div className={styles.contentContainer}>
        <div>
          <h3>Description:</h3>
          <p>{activity.description}</p>
        </div>
        <div className={styles.artistBox}>
          <Artists artists={artists} />
        </div>
      </div>
    </Section>
  );
}

function Artists({ artists }) {
  if (artists.data.length < 1) return <Empty resourceName="artists" />;
  return (
    <div className={styles.artists}>
      <h4>Artists ({artists.meta.totalItems})</h4>
      <div>
        {artists.data.map((artist, index) => (
          <Artist artist={artist} key={artist.id} index={index} />
        ))}
      </div>
    </div>
  );
}

function Artist({ artist, index }) {
  const router = useRouter();
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      className={styles.artist}
      onClick={() => router.push(`/artists/${artist.id}`)}
      custom={index}
      variants={slide}
      initial="initial"
      animate={inView ? 'enter' : 'initial'}
      ref={ref}
    >
      <div className={styles.artistImageContainer}>
        <Image
          src={artist.image_url}
          width={80}
          height={80}
          alt={artist.first_name}
          draggable={false}
        />
      </div>
      <div className={styles.artistDetails}>
        <h5>
          {artist.first_name} {artist.last_name}
        </h5>
        <p>{artist.medium}</p>
      </div>
    </motion.div>
  );
}

export default ActivityContent;
