import styles from './donation/styles/donation.module.css';

import Status from './donation/Status';
import MetaTags from '@/components/head';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

function Donation() {
  const router = useRouter();
  const { trxref, reference } = router.query;

  if (!trxref && !reference) return <Loader />;

  return (
    <>
      <MetaTags title={`Payment successful - 1952 Africa`} description="" />
      <section className={styles.section}>
        <Status status="successful" />
      </section>
    </>
  );
}

export default Donation;
