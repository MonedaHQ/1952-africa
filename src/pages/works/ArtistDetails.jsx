import Image from 'next/image';

import styles from './styles/artistDetails.module.css';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

function ArtistDetails({ artist }) {
  const router = useRouter();
  if (!artist) return <Loader />;
  return (
    <div
      className={styles.artistDetailBox}
      onClick={() => router.push(`/artists/${artist.id}`)}
    >
      <div className={styles.imageContainer}>
        <Image
          src={artist.image_url}
          width={80}
          height={80}
          alt={`A photo of ${artist.first_name}`}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>
          {artist.first_name} {artist.last_name}
        </h3>
        <p>{artist.medium}</p>
      </div>
    </div>
  );
}

export default ArtistDetails;
