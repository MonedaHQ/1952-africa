import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styles from './styles/slideshow.module.css';

const srcOf = (image) =>
  typeof image === 'string' ? image : image?.src || image?.imagePath;

/** { title, artist, workHref, artistHref } for an artwork slide, or a plain caption. */
export function creditOf(image) {
  if (!image || typeof image === 'string') {
    return { title: titleFromPath(image) };
  }
  return {
    title: image.title || image.caption || titleFromPath(image),
    artist: image.artist,
    workHref: image.workId ? `/works/${image.workId}` : null,
    artistHref: image.artistId ? `/artists/${image.artistId}` : null,
  };
}

/** "/images/slideshow/in-retrospect.JPG" -> "In Retrospect" */
export function titleFromPath(image) {
  if (image && typeof image !== 'string' && image.caption) return image.caption;
  const src = srcOf(image) || '';
  const name = src.split('/').pop().replace(/\.[^.]+$/, '');
  return name
    .split('-')
    .map((word) =>
      /^(i{1,3}|iv|v)$/i.test(word)
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');
}

/** Index + autoplay state for a crossfading slideshow. */
export function useSlideshow(length, interval = 7000) {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const timer = useRef(null);

  const goTo = useCallback(
    (next) => {
      if (!length) return;
      setIndex(((next % length) + length) % length);
      setTick((t) => t + 1);
    },
    [length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (length < 2) return undefined;
    timer.current = setTimeout(() => {
      if (!document.hidden) goTo(index + 1);
      else setTick((t) => t + 1);
    }, interval);
    return () => clearTimeout(timer.current);
  }, [index, tick, length, interval, goTo]);

  return { index, next, prev, goTo, tick };
}

/** Stacked, crossfading image layers with a slow settle on the active one. */
export function SlideLayers({ images = [], index = 0, sizes = '100vw', priority = false }) {
  // Only mount slides once they are needed (current + next) so the page
  // never downloads the whole set up front.
  const [mounted, setMounted] = useState(() => new Set([0]));

  useEffect(() => {
    setMounted((current) => {
      const nextIndex = (index + 1) % images.length;
      if (current.has(index) && current.has(nextIndex)) return current;
      const updated = new Set(current);
      updated.add(index);
      updated.add(nextIndex);
      return updated;
    });
  }, [index, images.length]);

  return (
    <div className={styles.layers}>
      {images.map((image, i) =>
        mounted.has(i) ? (
          <div
            key={srcOf(image)}
            className={`${styles.layer} ${i === index ? styles.active : ''}`}
          >
            <Image
              src={srcOf(image)}
              alt=""
              fill
              sizes={sizes}
              priority={priority && i === 0}
              draggable={false}
            />
          </div>
        ) : null
      )}
    </div>
  );
}
