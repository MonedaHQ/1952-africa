import Image from 'next/image';
import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';

import Pagination from './Pagination';
import Reveal from './Reveal';
import Section from './Section';

import styles from './styles/itemlist.module.css';
import { truncateString } from '@/utils/helpers';

function ItemList({ title, data, paginationCount, isLoading, navigateTo }) {
  return (
    <Section>
      <div className={styles.main}>
        <h2 className={styles.heading}>{title}</h2>
        {!isLoading && (
          <div className={styles.itemsContainer}>
            {data.map((item, index) => (
              <Item
                item={item}
                key={item.id || item.title}
                index={index}
                navigateTo={navigateTo}
              />
            ))}
          </div>
        )}
        <Pagination count={paginationCount} />
      </div>
    </Section>
  );
}

function Item({ item, index, navigateTo }) {
  const truncatedDescription =
    item.description && truncateString(item.description, 40);

  return (
    <Reveal as="article" delay={(index % 3) * 0.08}>
      <Link className={styles.item} href={`/${navigateTo}/${item.id}`}>
        <div className={styles.itemImageContainer}>
          <Image
            width={900}
            height={675}
            src={item.image_url}
            alt={item.title}
            sizes="(max-width: 750px) 100vw, (max-width: 980px) 50vw, 33vw"
            draggable={false}
          />
        </div>
        <div className={styles.itemContent}>
          <div className={styles.itemText}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: truncatedDescription || item.medium || '',
              }}
            />
          </div>
          <span className={styles.itemArrow}>
            <PiArrowUpRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default ItemList;
