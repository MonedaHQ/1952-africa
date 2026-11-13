import Section from '@/components/Section';
import styles from './styles/activitycontent.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Empty from '@/components/Empty';
import Loader from '@/components/Loader';
import { convertToEmbedLink } from '@/utils/helpers';

function ActivityContent({ activity, artists }) {
  if (!activity || !artists) return <Loader />;
  const videoLink = convertToEmbedLink(activity.video_url || '');
  return (
    <Section>
      <div className={styles.contentContainer}>
        <div className={styles.main}>
          {videoLink && (
            <div className={styles.videoContainer}>
              <iframe
                src={videoLink}
                title={activity.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
          <h2>About this activity</h2>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: activity.description }} />
          {/* <p>{activity.description}</p> */}
        </div>
        <div className={styles.artistBox}>
          <Artists artists={artists} />
        </div>
      </div>
    </Section>
  );
}

function Artists({ artists }) {
  if (artists.data.length < 1) return <Empty resourceName="artists" />;
  return (
    <div className={styles.artists}>
      <h3>Artists</h3>
      <div>
        {artists.data.map((artist, index) => (
          <Artist artist={artist} key={artist.id} index={index} />
        ))}
      </div>
    </div>
  );
}

function Artist({ artist, index }) {
  const router = useRouter();
  return (
    <div
      className={styles.artist}
      onClick={() => router.push(`/artists/${artist.id}`)}
    >
      <div className={styles.artistImageContainer}>
        <Image
          src={artist.image_url}
          width={80}
          height={80}
          alt={artist.first_name}
          draggable={false}
        />
      </div>
      <div className={styles.artistDetails}>
        <h5>
          {artist.first_name} {artist.last_name}
        </h5>
        <p>{artist.medium}</p>
      </div>
    </div>
  );
}

export default ActivityContent;
