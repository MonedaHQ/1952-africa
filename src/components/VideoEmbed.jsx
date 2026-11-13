import { useState } from 'react';
import { PiPlayFill } from 'react-icons/pi';

import { convertToEmbedLink } from '@/utils/helpers';
import styles from './styles/videoembed.module.css';

/** YouTube embed that shows a poster first and only loads the player on click. */
function VideoEmbed({ title, linkUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [poster, setPoster] = useState('maxresdefault');

  const embedLink = convertToEmbedLink(linkUrl);
  const videoId = embedLink?.split('/embed/')[1]?.split(/[?&]/)[0];

  return (
    <div className={styles.videoContainer}>
      {isPlaying || !videoId ? (
        <iframe
          src={
            videoId
              ? `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`
              : embedLink
          }
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className={styles.poster}
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/${poster}.jpg`}
            alt=""
            loading="lazy"
            onLoad={(event) => {
              // YouTube serves a 120px placeholder when no HD poster exists
              if (event.currentTarget.naturalWidth < 200) setPoster('hqdefault');
            }}
            onError={() => setPoster('hqdefault')}
          />
          <span className={styles.play}>
            <PiPlayFill aria-hidden="true" />
          </span>
          <span className={styles.label}>Watch the film</span>
        </button>
      )}
    </div>
  );
}

export default VideoEmbed;
