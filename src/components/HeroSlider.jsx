import { motion } from 'framer-motion';

import { useArtworks } from '@/hooks/useArtworks';

import Section from './Section';
import { SlideLayers, creditOf, useSlideshow } from './Slideshow';

import styles from './styles/heroslider.module.css';

const ease = [0.2, 0.7, 0.2, 1];

/**
 * Inner-page header: title on the left, a framed (never over-enlarged)
 * slideshow on the right.
 */
function HeroSlider({ array, title, eyebrow = '1952 Africa' }) {
  const artworks = useArtworks();
  const images = (array?.length ? array : artworks) || [];
  const { index } = useSlideshow(images.length, 6000);
  const credit = images.length ? creditOf(images[index]) : {};

  return (
    <Section variant="hero">
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              {eyebrow}
            </motion.span>
            <h1 className={styles.title}>
              <motion.span
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.08 }}
              >
                {title}
              </motion.span>
            </h1>
            <p className={styles.tagline}>Art · Culture · History</p>
          </div>

          <motion.figure
            className={styles.figure}
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 1.1, ease, delay: 0.15 }}
          >
            <div className={styles.frame}>
              {images.length > 0 && (
                <SlideLayers
                  images={images}
                  index={index}
                  sizes="(max-width: 800px) 100vw, 560px"
                  priority
                />
              )}
            </div>
            {credit.title && (
              <figcaption className={styles.caption} key={index}>
                <em>{credit.title}</em>
                {credit.artist && <span> — {credit.artist}</span>}
              </figcaption>
            )}
          </motion.figure>
        </div>
      </header>
    </Section>
  );
}

export default HeroSlider;
