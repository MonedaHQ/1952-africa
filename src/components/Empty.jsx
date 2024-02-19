import { HiOutlineHandRaised } from 'react-icons/hi2';
import styles from './styles/empty.module.css';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp } from '@/utils/anim';

function Empty({ resourceName }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.message}
        ref={ref}
        variants={slideUp}
        initial="initial"
        animate={inView ? 'enter' : 'initial'}
      >
        <HiOutlineHandRaised />
        <p>There are no {resourceName} yet.</p>
      </motion.div>
    </div>
  );
}

export default Empty;
