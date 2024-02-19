import Section from '@/components/Section';
import styles from './styles/workdetails.module.css';
import { PiCheckCircleFill, PiMinusCircleFill } from 'react-icons/pi';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

function WorkDetails({ work, exhibition }) {
  const router = useRouter();
  return (
    <Section>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.heading}>
              <h3>Work Details</h3>
              <p
                className={`${styles.available} ${
                  work.is_available ? styles.green : styles.fail
                }`}
              >
                <span>
                  {' '}
                  {work.is_available ? (
                    <PiCheckCircleFill />
                  ) : (
                    <PiMinusCircleFill />
                  )}
                </span>
                {work.is_available ? 'Available' : 'Sold'}
              </p>
            </div>
            <ul className={styles.content}>
              <li className={styles.list}>
                <h3>Size:</h3> <p>{work.canvas_size}</p>
              </li>
              <li className={styles.list}>
                <h3>Medium:</h3> <p>{work.medium}</p>
              </li>
              <li className={styles.list}>
                <h3>Exhibitied at:</h3>{' '}
                <Button
                  variant="link-light"
                  onClick={() => router.push(`/gallery/${exhibition.id}`)}
                >
                  {exhibition.title}
                </Button>
              </li>
              <li className={styles.list}>
                <h3>Valued at:</h3>{' '}
                <p>
                  {work.value} {work.value_currency}
                </p>
              </li>
            </ul>
            <Button
              variant="primary"
              onClick={() => router.push(`/inquire/${work.id}`)}
              disabled={!work.is_available}
            >
              Inquire
            </Button>
          </div>
        </div>
      </main>
    </Section>
  );
}

export default WorkDetails;
