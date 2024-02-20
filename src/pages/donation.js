import styles from './donation/styles/donation.module.css';

import Status from './donation/Status';
import MetaTags from '@/components/head';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

function Donation() {
  const router = useRouter();
  const { status } = router.query;

  if (!status) return <Loader />;

  return (
    <>
      <MetaTags title={`Payment ${status} - 1952 Africa`} description="" />
      <section className={styles.section}>
        <Status status={status} />
      </section>
    </>
  );
}

export default Donation;
