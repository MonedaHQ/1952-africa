import styles from './donation/styles/donation.module.css';

import Status from './donation/Status';
import MetaTags from '@/components/head';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';
import { useEffect, useState } from 'react';

const failureStatuses = [
  'failed',
  'failure',
  'cancelled',
  'canceled',
  'abandoned',
];

function Donation() {
  const router = useRouter();
  const { trxref, reference, status } = router.query;
  const [donationContext, setDonationContext] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;

    const storedContext = window.localStorage.getItem('donationReturnContext');
    if (!storedContext) return;

    try {
      setDonationContext(JSON.parse(storedContext));
    } catch (error) {
      setDonationContext(null);
    } finally {
      window.localStorage.removeItem('donationReturnContext');
    }
  }, [router.isReady]);

  if (!router.isReady || (!trxref && !reference && !status)) return <Loader />;

  const normalizedStatus =
    typeof status === 'string' ? status.toLowerCase() : '';
  const paymentStatus = failureStatuses.includes(normalizedStatus)
    ? 'failed'
    : 'successful';
  const isMemorialDonation = donationContext?.type === 'memorial';
  const isSuccessful = paymentStatus === 'successful';
  const tributeUrl =
    'https://www.forevermissed.com/adebola-ewaoluwa-adesanya/about';

  return (
    <>
      <MetaTags
        title={`Payment ${isSuccessful ? 'successful' : 'failed'} - 1952 Africa`}
        description=""
      />
      <section className={styles.section}>
        <Status
          status={paymentStatus}
          title={
            isMemorialDonation
              ? isSuccessful
                ? 'Thank you'
                : 'Payment failed'
              : undefined
          }
          message={
            isMemorialDonation
              ? isSuccessful
                ? 'Thank you for donating in memory of Adebola Ewaoluwa Adesanya. You can also leave a tribute for Adebola on the original memorial page.'
                : 'Your memorial donation could not be completed. Please try again.'
              : undefined
          }
          buttonLabel={isMemorialDonation ? 'Back to memorial' : 'Back Home'}
          buttonHref={
            isMemorialDonation ? '/adebola-ewaoluwa-adesanya' : '/'
          }
          secondaryButtonLabel={
            isMemorialDonation && isSuccessful ? 'Leave a tribute' : undefined
          }
          secondaryButtonHref={
            isMemorialDonation && isSuccessful ? tributeUrl : undefined
          }
        />
      </section>
    </>
  );
}

export default Donation;
