import Section from '@/components/Section';
import styles from './styles/mainsection.module.css';
import Image from 'next/image';
import { convertToEmbedLink } from '@/utils/helpers';

import { PiClipboardTextLight, PiUserPlus } from 'react-icons/pi';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

function MainSection({ activity, program, artists }) {
  if (!activity || !program || !artists) return <Loader />;
  const youtubeEmbedLink = convertToEmbedLink(activity.video_url) || '';
  return (
    <Section>
      <main className={styles.main}>
        <ActivityDetails
          activity={activity}
          program={program}
          artists={artists}
        />
        <Video videoLink={youtubeEmbedLink} activity={activity} />
      </main>
    </Section>
  );
}

function ActivityDetails({ activity, program, artists }) {
  const router = useRouter();
  return (
    <div className={styles.activityDetails}>
      <div className={styles.activityImageAndTitle}>
        <Image
          src={activity.image_url}
          width={350}
          height={350}
          alt={activity.title}
          draggable={false}
        />
        <h3>{activity.title}</h3>
      </div>
      <ul className={styles.activityMetrics}>
        <li>
          <PiClipboardTextLight />{' '}
          <Button
            variant="link-light"
            onClick={() => router.push(`/programs/${program.id}`)}
          >
            {program.title}
          </Button>
        </li>
        <li>
          <PiUserPlus /> {artists.meta.totalItems} Artists
        </li>
      </ul>
    </div>
  );
}

function Video({ videoLink, activity }) {
  return (
    <div className={styles.videoContainer}>
      <iframe
        width="560"
        height="315"
        src={videoLink}
        title={activity.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MainSection;
