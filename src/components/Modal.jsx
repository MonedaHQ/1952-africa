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

  const content = {
    title: 'The Chizi Wigwe Prize for African Futurism is now open!',
    description: 'Application Deadline: 31st March, 2026',
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
              <h3>{content.title}</h3>
              <p>
                {content.description.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div className={styles.twoButtons}>
              <Button
                variant="primary"
                href="https://forms.gle/gvEGJ6kNo1T4VzCT6"
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
