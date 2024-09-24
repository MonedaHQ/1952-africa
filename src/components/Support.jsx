import { motion, useInView } from 'framer-motion';
import Button from './Button';
import { useRouter } from 'next/router';

import { donationMethods as methods } from '@/data/donationMethods';

import styles from './styles/support.module.css';
import { useRef } from 'react';

const content = {
  heading: 'Make a Pledge',
  paragraphs:
    'We are a non-profit organization dedicated to empowering African artists. We believe that everyone should have the opportunity to express themselves through art, and we are committed to removing the financial barriers that can prevent artists from creating. <br />  We support African artists in a variety of ways, including providing them with grants, scholarships, and access to resources and  training. We also work to promote African art and artists to a global audience. Your support can help us to continue our work and to make a real difference in the lives of African artists. Please consider making a donation today.',
};

const methodVariant = {
  hidden: { opacity: 0, transform: 'translateY(14px)' },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: { delay: 0.3, duration: 0.35 },
  },
};

function Support() {
  return (
    <section className={styles.section} id="support">
      <HeadingContent />
      {methods && <MethodsBox />}
    </section>
  );
}

function HeadingContent() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{content.heading}</h3>
      <div className={styles.paragraph}>
        <p dangerouslySetInnerHTML={{ __html: content.paragraphs }} />
      </div>
    </div>
  );
}

function MethodsBox() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div
      className={styles.methods}
      ref={ref}
      variants={methodVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {methods.map((method) => (
        <DonationMethods method={method} key={method.heading} />
      ))}
    </div>
  );
}

function DonationMethods({ method }) {
  const router = useRouter();
  if (!method) return;
  const { icon, heading, content, buttonLabel, mainLink, learnLink } = method;
  return (
    <div className={styles.card}>
      <div className={styles.svgContainer}>
        {/* <p className={styles.svg}>{icon}</p> */}
        <h4>{heading}</h4>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
      <div className={styles.btnWrap}>
        <Button variant="primary" onClick={() => router.push(mainLink)}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

export default Support;
