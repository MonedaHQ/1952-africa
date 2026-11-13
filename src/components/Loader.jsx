import styles from './styles/loader.module.css';
import MetaTags from './head';

function Loader({ title = '1952 Africa', description = '' }) {
  return (
    <>
      <MetaTags title={title} description={description} />
      <section className={styles.section} role="status" aria-label="Loading">
        <span className={styles.loader} />
        <span className={styles.label}>Loading</span>
      </section>
    </>
  );
}

export default Loader;
