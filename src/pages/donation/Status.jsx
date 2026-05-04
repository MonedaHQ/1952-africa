import { motion } from 'framer-motion';

import Loader from '@/components/Loader';
import { useRouter } from 'next/router';
import { PiCheckCircleFill, PiInfoFill } from 'react-icons/pi';

import styles from './styles/donation.module.css';
import Button from '@/components/Button';
import { useState } from 'react';

function Status({
  status,
  title,
  message,
  buttonLabel = 'Back Home',
  buttonHref = '/',
  secondaryButtonLabel,
  secondaryButtonHref,
}) {
  const router = useRouter();

  const [isNavigating, setIsNavigating] = useState(false);

  const isSuccess = status === 'successful' || status === 'completed';

  return (
    <motion.div
      className={styles.content}
      initial={{ transform: 'scale(0)' }}
      animate={{ transform: 'scale(1)' }}
    >
      <div className={styles.message}>
        <div
          className={`${styles.icon} ${styles[isSuccess ? 'success' : 'fail']}`}
        >
          {isSuccess ? <PiCheckCircleFill /> : <PiInfoFill />}
        </div>
        <h4>{title || (isSuccess ? 'Successful' : 'Failed')}</h4>
        <p>
          {message ||
            `Your payment ${
              isSuccess ? 'was successful' : 'failed. Please try again'
            }`}
        </p>
      </div>
      <div className={styles.btnWrap}>
        {isNavigating && <Loader />}
        {!isNavigating && (
          <>
            <Button
              variant="primary"
              onClick={() => {
                setIsNavigating(true);
                router.push(buttonHref);
              }}
            >
              {buttonLabel}
            </Button>
            {secondaryButtonHref && (
              <Button
                variant="primary-reverse"
                href={secondaryButtonHref}
              >
                {secondaryButtonLabel}
              </Button>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Status;
