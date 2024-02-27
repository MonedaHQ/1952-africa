import Image from 'next/image';
import styles from './styles/bands.module.css';

function Bands({ double = false }) {
  return (
    <div className={styles.marquee}>
      <Band direction="left" />
      {double && <Band direction="right" />}
    </div>
  );
}

function Band({ direction }) {
  const bands = Array.from({ length: 20 }, () => `/assets/band.png`);
  const allBands = [...bands, ...bands];
  return (
    <div className={styles.bandsContainer}>
      <div className={`${styles.scrollContainer} ${styles[direction]}`}>
        {allBands.map((band, index) => (
          <Image
            key={index}
            src={band}
            alt="1952 Africa code"
            width={300}
            height={137}
            className={styles.bands}
            draggable={false}
          />
        ))}
        {bands.map((band, index) => (
          <Image
            key={index}
            src={band}
            alt="1952 Africa code"
            width={300}
            height={137}
            className={styles.bands}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
export default Bands;
