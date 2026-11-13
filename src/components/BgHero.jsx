import Link from 'next/link';
import { PiArrowLeft, PiArrowRight } from 'react-icons/pi';

import { SlideLayers, creditOf, useSlideshow } from './Slideshow';
import styles from './styles/bghero.module.css';

const pad = (n) => String(n).padStart(2, '0');

function BgHero({ children, slideShow }) {
  const { index, next, prev, tick } = useSlideshow(
    slideShow?.length || 0,
    7000
  );

  const hasSlides = slideShow?.length > 0;
  const credit = hasSlides ? creditOf(slideShow[index]) : null;

  return (
    <section className={styles.heroSection}>
      {hasSlides && <SlideLayers images={slideShow} index={index} priority />}
      <div className={styles.scrim} />

      <div className={styles.heroContent}>{children}</div>

      <div className={styles.heroBar}>
        {credit ? (
          <div className={styles.caption} key={index}>
            <span className={styles.captionLabel}>Now showing</span>
            <span className={styles.captionTitle}>
              {credit.workHref ? (
                <Link href={credit.workHref}>
                  <em>{credit.title}</em>
                </Link>
              ) : (
                <em>{credit.title}</em>
              )}
              {credit.artist && (
                <>
                  {' '}
                  <span className={styles.by}>by</span>{' '}
                  {credit.artistHref ? (
                    <Link href={credit.artistHref}>{credit.artist}</Link>
                  ) : (
                    credit.artist
                  )}
                </>
              )}
            </span>
          </div>
        ) : (
          <span />
        )}

        <div className={styles.controls}>
          <span className={styles.counter}>
            <strong>{pad(hasSlides ? index + 1 : 0)}</strong>
            <span className={styles.progress}>
              <span className={styles.progressFill} key={tick} />
            </span>
            {pad(slideShow?.length || 0)}
          </span>
          <button
            type="button"
            className={styles.arrow}
            onClick={prev}
            aria-label="Previous artwork"
          >
            <PiArrowLeft />
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={next}
            aria-label="Next artwork"
          >
            <PiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BgHero;
