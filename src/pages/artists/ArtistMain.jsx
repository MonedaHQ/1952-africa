import Image from 'next/image';
import Link from 'next/link';
import {
  PiArrowLeft,
  PiClipboardTextLight,
  PiInstagramLogoLight,
} from 'react-icons/pi';

import Button from '@/components/Button';
import Loader from '@/components/Loader';
import Section from '@/components/Section';
import { convertToEmbedLink } from '@/utils/helpers';

import styles from './styles/artistmain.module.css';

function ArtistMain({ artist, activity }) {
  if (!artist) return <Loader />;
  const youtubeEmbedLink = convertToEmbedLink(artist?.video_url || '') || '';

  return (
    <Section>
      <div className={styles.main}>
        <Link href="/artists" className={styles.back}>
          <PiArrowLeft aria-hidden="true" /> All artists
        </Link>

        <div
          className={`${styles.artistDetails} ${
            youtubeEmbedLink ? styles.withVideo : ''
          }`}
        >
          <div className={styles.portrait}>
            <Image
              src={artist.image_url}
              width={480}
              height={600}
              alt={`${artist.first_name} ${artist.last_name}`}
              draggable={false}
              priority
            />
          </div>

          <div className={styles.summary}>
            <span className="eyebrow">Artist</span>
            <h1>
              {artist.first_name} {artist.last_name}
            </h1>
            {artist.medium && <p className={styles.medium}>{artist.medium}</p>}

            <ul className={styles.artistMetrics}>
              {activity && (
                <li>
                  <PiClipboardTextLight />
                  <Button variant="link-light" href={`/activities/${activity.id}`}>
                    {activity.title}
                  </Button>
                </li>
              )}
              {artist.instagram_url && (
                <li>
                  <PiInstagramLogoLight />
                  <Button variant="link-light" href={artist.instagram_url}>
                    Find {artist.first_name} on Instagram
                  </Button>
                </li>
              )}
            </ul>
          </div>

          {youtubeEmbedLink && (
            <div className={styles.videoContainer}>
              <iframe
                src={youtubeEmbedLink}
                title={`${artist.first_name} ${artist.last_name}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

      </div>
    </Section>
  );
}

export default ArtistMain;
