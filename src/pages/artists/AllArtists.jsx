import Section from '@/components/Section';

import styles from './styles/allartists.module.css';
import Image from 'next/image';
import Pagination from '@/components/Pagination';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';

function AllArtists({ artists }) {
  return (
    <Section>
      <div className={styles.main}>
        <h2>All artists</h2>
        <div className={styles.artistContainer}>
          {artists?.data?.map((artist) => (
            <Artist key={artist.id} artist={artist} />
          ))}
        </div>
        <Pagination count={artists?.meta?.totalItems} />
      </div>
    </Section>
  );
}

function Artist({ artist }) {
  return (
    <Link className={styles.artistCard} href={`/artists/${artist.id}`}>
      <div className={styles.imageContainer}>
        <Image
          width={800}
          height={980}
          src={artist.image_url}
          sizes="(max-width: 830px) 50vw, (max-width: 1200px) 33vw, 25vw"
          alt={`${artist.first_name} ${artist.last_name}`}
          draggable={false}
        />
      </div>
      <div className={styles.artistInfo}>
        <div>
          <h3>{artist.first_name} {artist.last_name}</h3>
          <p>{artist.medium}</p>
        </div>
        <PiArrowUpRight aria-hidden="true" />
      </div>
    </Link>
  );
}

export default AllArtists;
