import { motion, useInView } from 'framer-motion';

import styles from './styles/loader.module.css';
import { slideUp } from '@/utils/anim';
import { useRef } from 'react';
import MetaTags from './head';

function Loader({ title = '', description = '' }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <>
      <MetaTags title={title} description={description} />
      <section className={styles.section}>
        <motion.div
          className={styles.loaderContainer}
          variants={slideUp}
          initial="initial"
          animate={inView ? 'enter' : 'initial'}
          ref={ref}
        >
          <span className={styles.loader}></span>
        </motion.div>
      </section>
    </>
  );
}

export default Loader;
