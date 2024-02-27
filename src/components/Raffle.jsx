import { raffleData } from '@/data/raffledata';

import styles from './styles/raffle.module.css';
import Button from './Button';
import Image from 'next/image';
import CountdownTimer from './CountdownTimer';
import Section from './Section';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { scaleUpSlow } from '@/utils/anim';
import { useRouter } from 'next/router';

function Raffle() {
  const inViewRef = useRef();

  const inView = useInView(inViewRef, { once: true });

  const { description, photo, end_date, tickets_left, total_tickets } =
    raffleData;

  return (
    <Section>
      <motion.main
        className={styles.raffleSection}
        ref={inViewRef}
        variants={scaleUpSlow}
        initial="initial"
        animate={inView ? 'visible' : 'initial'}
        id="raffle"
      >
        <Description
          description={description}
          ticketsLeft={tickets_left}
          totalTickets={total_tickets}
        />
        <RaffleDetails endDate={end_date} photo={photo} />
      </motion.main>
    </Section>
  );
}

function Description({ description, ticketsLeft, totalTickets }) {
  const router = useRouter();
  return (
    <div className={styles.descriptionBox}>
      <h3 className={styles.heading}>The 1952 Africa Raffle</h3>
      <div className={styles.paragraphs}>
        <p>
          The 1952 Africa Raffle Draw provides a unique opportunity for you to
          own a valuable piece of art and support a good cause at the same time!
        </p>
        <p>{description}</p>
      </div>
      <div className={styles.cta}>
        {/* <p>
          ({ticketsLeft} out of {totalTickets} tickets left)
        </p> */}
        <Button variant="primary" onClick={() => router.push('/raffle')}>
          Purchase ticket
        </Button>
      </div>
    </div>
  );
}

function RaffleDetails({ photo, endDate }) {
  return (
    <div className={styles.raffleDetails}>
      <div className={styles.raffleImageContainer}>
        <Image
          src={photo}
          width={550}
          height={550}
          alt="Raffle item"
          draggable={false}
        />
      </div>
      {/* <div className={styles.raffleTimer}>
        <p>Raffle ends in</p>
        <CountdownTimer endDate={endDate} />
      </div> */}
    </div>
  );
}

export default Raffle;
