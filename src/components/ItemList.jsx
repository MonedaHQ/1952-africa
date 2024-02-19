import { motion, useInView } from 'framer-motion';
import Pagination from './Pagination';
import Section from './Section';
import { useRouter } from 'next/router';
import Button from './Button';
import Image from 'next/image';

import styles from './styles/itemlist.module.css';
import { useRef } from 'react';
import { slide } from '@/utils/anim';
import { truncateString } from '@/utils/helpers';

function ItemList({
  title,
  data,
  paginationCount,
  isLoading,
  navigateTo,
  btnLabel = 'View',
}) {
  return (
    <Section>
      <main className={styles.main}>
        <h3 className={styles.heading}>
          {title} ({paginationCount || 0})
        </h3>
        {!isLoading && (
          <div className={styles.itemsContainer}>
            {data.map((item, index) => (
              <Item
                item={item}
                key={item.title}
                index={index}
                navigateTo={navigateTo}
                btnLabel={btnLabel}
              />
            ))}
          </div>
        )}
        <div>
          <Pagination count={paginationCount} />
        </div>
      </main>
    </Section>
  );
}

function Item({ item, index, navigateTo, btnLabel }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const router = useRouter();

  const truncatedDescription =
    item.description && truncateString(item.description, 64);

  return (
    <motion.div
      className={styles.item}
      ref={ref}
      custom={index}
      variants={slide}
      initial="initial"
      animate={inView ? 'enter' : 'initial'}
    >
      <div className={styles.itemImageContainer}>
        <Image
          width={300}
          height={300}
          src={item.image_url}
          alt={item.title}
          draggable={false}
        />
      </div>
      <div className={styles.itemContent}>
        <div className={styles.content}>
          <h4 className={styles.itemTitle}>{item.title}</h4>
          <p>{truncatedDescription || item.medium} </p>
        </div>
        <Button
          variant="primary"
          onClick={() => router.push(`/${navigateTo}/${item.id}`)}
        >
          {btnLabel}
        </Button>
      </div>
    </motion.div>
  );
}

export default ItemList;
