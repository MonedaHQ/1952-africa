import Section from '@/components/Section';
import { convertToEmbedLink } from '@/utils/helpers';

import styles from './styles/additionaldetails.module.css';
import Loader from '@/components/Loader';

function AdditionalDetails({ work }) {
  if (!work) return <Loader />;
  if (!work.video_url || work.video_url === '') return null;

  const youtubeEmbedLink = convertToEmbedLink(work.video_url);

  return (
    <Section>
      <div className={styles.main}>
        <h2 className={styles.heading}>More about this work</h2>
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
      </div>
    </Section>
  );
}

export default AdditionalDetails;
