import Section from '@/components/Section';

import styles from './styles/allartists.module.css';
import Image from 'next/image';
import Pagination from '@/components/Pagination';
import { useRouter } from 'next/router';

function AllArtists({ artists }) {
  return (
    <Section>
      <main className={styles.main}>
        <h2>All artists ({artists.meta.totalItems})</h2>
        <div className={styles.artistContainer}>
          {artists.data.map((artist) => (
            <Artist key={artist.id} artist={artist} />
          ))}
        </div>
        <Pagination count={artists.meta.totalItems} />
      </main>
    </Section>
  );
}

function Artist({ artist }) {
  const router = useRouter();
  return (
    <div
      className={styles.artistCard}
      onClick={() => router.push(`/artists/${artist.id}`)}
    >
      <div className={styles.innerArtistCard}>
        <div className={styles.imageContainer}>
          <Image
            width={80}
            height={80}
            src={artist.image_url}
            alt={`${artist.first_name}'s avatar`}
            draggable={false}
          />
        </div>
        <div className={styles.artistInfo}>
          <h3>
            {artist.first_name} {artist.last_name}
          </h3>
          <p>{artist.medium}</p>
        </div>
      </div>
    </div>
  );
}

export default AllArtists;
