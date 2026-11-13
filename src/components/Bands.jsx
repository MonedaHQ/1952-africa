import styles from './styles/bands.module.css';

/**
 * The 1952 "52" band — a brand signature.
 * Drawn as a CSS mask so it can take any colour and stay crisp at any size.
 *
 * tone: 'ink' (default, on ivory) | 'gold' (on black) | 'light' (on black) | 'green'
 * size: 'sm' | 'md' (default) | 'lg'
 */
function Bands({ double = false, tone = 'ink', size = 'md', bare = false }) {
  return (
    <div
      className={`${styles.band} ${styles[tone] || ''} ${styles[size] || ''} ${
        bare ? styles.bare : ''
      }`}
      aria-hidden="true"
    >
      <div className={styles.track} />
      {double && <div className={`${styles.track} ${styles.reverse}`} />}
    </div>
  );
}

export default Bands;
