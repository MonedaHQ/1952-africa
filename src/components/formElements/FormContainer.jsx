import { motion, useInView } from 'framer-motion';
import styles from './styles/formcontainer.module.css';
import { useRef } from 'react';

function FormContainer({ handleSubmit, onSubmit, padding, children }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const tableVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.1 } },
  };
  return (
    <form
      className={`${styles.form} ${padding ? styles.padded : ''}`}
      variants={tableVariants}
      ref={ref}
      initial="hidden"
      animate={`${inView ? 'visible' : 'hidden'}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
    </form>
  );
}

export default FormContainer;
