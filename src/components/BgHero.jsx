import Image from 'next/image';
import styles from './styles/bghero.module.css';
import ImageSlider from './ImageSlider';

function BgHero({ children, slideShow }) {
  if (!slideShow) return;

  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundImgContainer}>
        <ImageSlider imageArray={slideShow} />
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
