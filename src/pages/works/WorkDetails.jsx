import Section from '@/components/Section';
import styles from './styles/workdetails.module.css';
import { PiCheckCircleFill, PiMinusCircleFill } from 'react-icons/pi';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

function WorkDetails({ work, exhibition }) {
  const router = useRouter();

  if (!work || !exhibition) return <Loader />;

  return (
    <Section>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.heading}>
              <h5>Work Details</h5>
              <p
                className={`${styles.available} ${
                  work.is_available ? styles.green : styles.fail
                }`}
              >
                {work.is_available ? 'Available' : 'Sold'}
                <span>
                  {' '}
                  {work.is_available ? (
                    <PiCheckCircleFill />
                  ) : (
                    <PiMinusCircleFill />
                  )}
                </span>
              </p>
            </div>
            <ul className={styles.content}>
              <li className={styles.list}>
                <h5>Size:</h5> <p>{work.canvas_size}</p>
              </li>
              <li className={styles.list}>
                <h5>Medium:</h5> <p>{work.medium}</p>
              </li>
              <li className={styles.list}>
                <h5>Exhibitied at:</h5>{' '}
                <Button
                  variant="link-light"
                  onClick={() => router.push(`/gallery/${exhibition.id}`)}
                >
                  {exhibition.title}
                </Button>
              </li>
              <li className={styles.list}>
                <h5>Valued at:</h5>{' '}
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
