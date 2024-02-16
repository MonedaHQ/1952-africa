import { convertToEmbedLink } from '@/utils/helpers';
import styles from './styles/videoembed.module.css';

function VideoEmbed({ title, linkUrl }) {
  const embedLink = convertToEmbedLink(linkUrl);
  return (
    <div className={styles.videoContainer}>
      <iframe
        width="1503"
        height="845"
        src={`${embedLink}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default VideoEmbed;
