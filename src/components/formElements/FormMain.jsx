import styles from './styles/formmain.module.css';

function FormMain({ children }) {
  return <main className={styles.main}>{children}</main>;
}

export default FormMain;
