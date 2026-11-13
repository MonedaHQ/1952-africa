import Link from 'next/link';
import { PiArrowRight } from 'react-icons/pi';

import Button from '@/components/Button';
import Loader from '@/components/Loader';

import styles from './styles/workdetails.module.css';

function WorkDetails({ work, exhibition }) {
  if (!work || !exhibition) return <Loader />;

  return (
    <div className={styles.container}>
      <dl className={styles.content}>
        <div className={styles.list}>
          <dt>Status</dt>
          <dd
            className={`${styles.available} ${
              work.is_available ? styles.green : styles.fail
            }`}
          >
            {work.is_available ? 'Available' : 'Sold'}
          </dd>
        </div>
        <div className={styles.list}>
          <dt>Size</dt>
          <dd>{work.canvas_size}</dd>
        </div>
        <div className={styles.list}>
          <dt>Medium</dt>
          <dd>{work.medium}</dd>
        </div>
        <div className={styles.list}>
          <dt>Exhibited at</dt>
          <dd>
            <Link href={`/gallery/${exhibition.id}`}>{exhibition.title}</Link>
          </dd>
        </div>
        <div className={styles.list}>
          <dt>Valued at</dt>
          <dd className={styles.value}>
            {work.value} {work.value_currency}
          </dd>
        </div>
      </dl>
      <Button
        variant="primary"
        href={work.is_available ? `/inquire/${work.id}` : null}
        disabled={!work.is_available}
      >
        {work.is_available ? (
          <>
            Inquire about this work <PiArrowRight />
          </>
        ) : (
          'This work has been sold'
        )}
      </Button>
    </div>
  );
}

export default WorkDetails;
