import Image from 'next/image';
import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';

import Loader from '@/components/Loader';

import styles from './styles/artistDetails.module.css';

function ArtistDetails({ artist }) {
  if (!artist) return <Loader />;
  return (
    <Link className={styles.artistDetailBox} href={`/artists/${artist.id}`}>
      <div className={styles.imageContainer}>
        <Image
          src={artist.image_url}
          width={112}
          height={112}
          alt={`A photo of ${artist.first_name}`}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.label}>Artist</span>
        <span className={styles.name}>
          {artist.first_name} {artist.last_name}
        </span>
      </div>
      <PiArrowUpRight aria-hidden="true" />
    </Link>
  );
}

export default ArtistDetails;
