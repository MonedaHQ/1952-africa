import Section from '@/components/Section';

import styles from './styles/artistmain.module.css';
import { useRouter } from 'next/router';
import { convertToEmbedLink } from '@/utils/helpers';
import {
  PiClipboardTextLight,
  PiUserPlus,
  PiInstagramLogoLight,
} from 'react-icons/pi';
import Button from '@/components/Button';
import Image from 'next/image';
import Loader from '@/components/Loader';

function ArtistMain({ artist, activity, works }) {
  const router = useRouter();
  if (!activity || !artist || !works) return <Loader />;
  const youtubeEmbedLink = convertToEmbedLink(artist?.video_url) || '';
  return (
    <Section>
      <main className={styles.main}>
        <ArtistDetails artist={artist} activity={activity} works={works} />
        <Video videoLink={youtubeEmbedLink} artist={artist} />
      </main>
    </Section>
  );
}

function ArtistDetails({ artist, activity, works }) {
  return (
    <div className={styles.artistDetails}>
      <div className={styles.artistImageAndTitle}>
        <Image
          src={artist.image_url}
          width={150}
          height={150}
          alt={`${artist.first_name}'s photo`}
          draggable={false}
        />
        <h3>
          {artist.first_name} {artist.last_name}
        </h3>
      </div>
      <ul className={styles.artistMetrics}>
        <li>
          <PiClipboardTextLight />{' '}
          <Button
            variant="link-light"
            onClick={() => router.push(`/activities/${activity.id}`)}
          >
            {activity.title}
          </Button>
        </li>

        <li>
          <PiInstagramLogoLight />{' '}
          <Button variant="link-light" href={artist.instagram_url}>
            Find {artist.first_name} on Instagram
          </Button>
        </li>
      </ul>
    </div>
  );
}

function Video({ videoLink, artist }) {
  if (!videoLink || !works) return <Loader />;

  return (
    <div className={styles.videoContainer}>
      <iframe
        width="560"
        height="315"
        src={videoLink}
        title={artist.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ArtistMain;
