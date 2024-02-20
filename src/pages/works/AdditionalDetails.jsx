import Section from '@/components/Section';
import { convertToEmbedLink } from '@/utils/helpers';

import styles from './styles/additionaldetails.module.css';

function AdditionalDetails({ work }) {
  if (!work.video_url || work.video_url === '') return null;

  const youtubeEmbedLink = convertToEmbedLink(work.video_url);

  return (
    <Section>
      <main className={styles.main}>
        <h3 className={styles.heading}>Additional details:</h3>
        <div className={styles.videoContainer}>
          <iframe
            width="560"
            height="315"
            src={youtubeEmbedLink}
            title={work.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </Section>
  );
}

export default AdditionalDetails;
