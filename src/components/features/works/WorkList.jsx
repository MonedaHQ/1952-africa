import Image from 'next/image';
import Link from 'next/link';

import Pagination from '@/components/Pagination';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';

import styles from './styles/worklist.module.css';

function WorkList({ works, emptyMessage, artistNames }) {
  if (!works?.data) return null;
  const isEmpty = works.data.length === 0;

  return (
    <Section>
      <div className={styles.main}>
        <h2 className={styles.heading}>Works</h2>
        {isEmpty ? (
          <p className={styles.empty}>
            {emptyMessage || 'There are no works to display yet.'}
          </p>
        ) : (
        <div className={styles.works}>
          {works.data.map((work, index) => (
            <Reveal key={work.id || work.title} delay={(index % 4) * 0.06}>
              <Link href={`/works/${work.id}`} className={styles.workContainer}>
                <div className={styles.workImages}>
                  <Image
                    src={work.image_url}
                    width={640}
                    height={640}
                    alt={work.title}
                    sizes="(max-width: 480px) 50vw, (max-width: 1100px) 33vw, 25vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.meta}>
                  <h3>{work.title}</h3>
                  {artistNames?.[work.artist_id] && (
                    <p className={styles.artist}>{artistNames[work.artist_id]}</p>
                  )}
                  <p>{work.medium}</p>
                  <p>{work.canvas_size}</p>
                  <div className={styles.footer}>
                    <span
                      className={`${styles.available} ${
                        work.is_available ? styles.green : styles.fail
                      }`}
                    >
                      {work.is_available ? 'Available' : 'Sold'}
                    </span>
                    <span className={styles.price}>
                      {work.value_currency} {work.value}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        )}
        {!isEmpty && <Pagination count={works.meta?.totalItems} />}
      </div>
    </Section>
  );
}

export default WorkList;
