import ItemList from '@/components/ItemList';
import Section from '@/components/Section';
import Image from 'next/image';

import styles from './styles/artistworks.module.css';
import Pagination from '@/components/Pagination';

import { PiCheckCircleFill, PiMinusCircleFill } from 'react-icons/pi';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

function ArtistWorks({ works }) {
  return (
    <Section>
      <main className={styles.main}>
        <h3 className={styles.heading}>Works ({works?.meta?.totalItems})</h3>
        <Works works={works?.data} />
        <Pagination count={works?.meta?.totalItems} />
      </main>
    </Section>
  );
}

function Works({ works }) {
  const router = useRouter();

  if (!works) return <Loader />;

  return (
    <div className={styles.works}>
      {works.map((work) => (
        <div key={work.title} className={styles.workContainer}>
          {' '}
          <div
            className={styles.workImages}
            onClick={() => router.push(`/works/${work.id}`)}
          >
            <Image
              src={work.image_url}
              width={1200}
              height={820}
              alt={work.title}
              className={styles.image}
            />
          </div>{' '}
          <h5>{work.title}</h5>
          <div>
            <p>{work.medium}</p>
            <p>{work.canvas_size}</p>
            <p
              className={`${styles.available} ${
                work.is_available ? styles.green : styles.fail
              }`}
            >
              <span>
                {work.is_available ? (
                  <PiCheckCircleFill />
                ) : (
                  <PiMinusCircleFill />
                )}
              </span>{' '}
              {work.is_available ? 'Available' : 'Sold'}
            </p>
            <p>
              {work.value_currency} {work.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtistWorks;
