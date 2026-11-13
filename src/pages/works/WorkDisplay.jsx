import Image from 'next/image';

import Loader from '@/components/Loader';

import styles from './styles/workdisplay.module.css';

function WorkDisplay({ work }) {
  if (!work) return <Loader />;
  return (
    <figure className={styles.imageContainer}>
      <Image
        src={work.image_url}
        width={1200}
        height={1200}
        alt={work.title}
        sizes="(max-width: 900px) 100vw, 60vw"
        className={styles.image}
        draggable={false}
        priority
      />
    </figure>
  );
}

export default WorkDisplay;
