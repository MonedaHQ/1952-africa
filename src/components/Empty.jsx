import styles from './styles/empty.module.css';

function Empty({ resourceName }) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p>There are no {resourceName} yet.</p>
      </div>
    </div>
  );
}

export default Empty;
