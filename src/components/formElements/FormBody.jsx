import Button from '../Button';
import styles from './styles/formbody.module.css';

function FormBody({ children, title, disabled = false }) {
  return (
    <div className={styles.formBody}>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      <div className={styles.formFields}>{children}</div>
      <div className={styles.buttonContainer}>
        <Button variant="primary" type="submit" disabled={disabled}>
          {disabled ? 'Loading...' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}

export default FormBody;
