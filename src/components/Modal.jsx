import { useState } from 'react';
import Image from 'next/image';
import styles from './styles/modal.module.css';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

function Modal() {
  const [isVisible, setIsVisible] = useState(true);

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const messageVariants = {
    initial: { opacity: 0, y: '6rem' },
    animate: { opacity: 1, y: 0, transition: { delay: 0.6 } },
    exit: { opacity: 0, y: '6rem', transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className={styles.message}
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Image
              src="/assets/1952-main-logo.png"
              width={200}
              height={200}
              alt="1952 Logo"
            />
            <div className={styles.content}>
              <h3>Our 4th Art Accelerator Programme is here!</h3>
              <p>
                Application Deadline: 7th August, 2025 <br /> Be a part of this
                journey
              </p>
            </div>
            <div className={styles.twoButtons}>
              <Button
                variant="primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfvw_WdSW652JG_ROEwZpUQYbHX9aA2rRLlBPSZ5OjWu7FNAg/viewform"
              >
                Register
              </Button>
              <Button
                variant="link-light"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsVisible(false);
                }}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
