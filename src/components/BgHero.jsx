import Image from 'next/image';
import styles from './styles/bghero.module.css';
import ImageSlider from './ImageSlider';

function BgHero({ children, slideShow }) {
  if (!slideShow) return;

  // const image = [
  //   '/images/slideshow/a-smile-from-a-stranger.jpg',
  //   '/images/slideshow/almost-home.jpg',
  //   '/images/slideshow/dewdrops-of-emotions.jpg',
  // ];

  const images = [
    '/images/slideshow/a-smile-from-a-stranger.jpg',
    '/images/slideshow/almost-home.jpg',
    '/images/slideshow/dewdrops-of-emotions.jpg',
    '/images/slideshow/divergent.jpg',
    '/images/slideshow/ego-of-a-god.jpg',
    '/images/slideshow/fading-riches.jpg',
    '/images/slideshow/father-nature.JPG',
    '/images/slideshow/finally-found-me.jpg',
    '/images/slideshow/frozen.jpg',
    '/images/slideshow/gesture-of-inclusion.jpg',
    '/images/slideshow/hope.jpg',
    '/images/slideshow/illusion-of-plenty.jpg',
    '/images/slideshow/in-retrospect.JPG',
    '/images/slideshow/living-bird.jpg',
    '/images/slideshow/living-in-the-shadow.jpg',
    '/images/slideshow/making-love-to-a-memory.jpg',
    '/images/slideshow/man-the-unfree-ii.jpg',
    '/images/slideshow/man-the-unfree.jpg',
    '/images/slideshow/misery-loves-company.jpg',
    '/images/slideshow/not-all-that-wander-are-lost-ii.jpg',
    '/images/slideshow/oduduwas-descent.JPG',
    '/images/slideshow/reflecting-ourselves.jpg',
    '/images/slideshow/relief.jpg',
    '/images/slideshow/scar.JPG',
    '/images/slideshow/take-care-of-me.jpg',
    '/images/slideshow/torn-melodies.jpg',
    '/images/slideshow/when-is-a-door-not-a-door-ajar.jpg',
    '/images/slideshow/when-tomorrow-is-too-late.JPG',
    '/images/slideshow/whispers-of-regret.jpg',
    '/images/slideshow/white-noise.JPG',
  ];
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundImgContainer}>
        <ImageSlider imageArray={images} />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.logoContainer}>
          <Image
            src="/assets/1952-main-logo-white.png"
            width={943}
            height={1127}
            alt="1952 Africa logo"
          />
        </div>
        {children}
      </div>
    </section>
  );
}

export default BgHero;
