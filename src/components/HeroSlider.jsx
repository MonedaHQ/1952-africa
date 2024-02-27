import { motion, useInView } from 'framer-motion';

import styles from './styles/heroslider.module.css';
import ImageSlider from './ImageSlider';
import Image from 'next/image';
import { useRef } from 'react';
import { slide } from '@/utils/anim';
import Section from './Section';

function HeroSlider({ array, title }) {
  const inViewRef = useRef();

  const inView = useInView(inViewRef, { once: true });

  return (
    <Section>
      <main className={styles.main}>
        <motion.div
          className={styles.sliderContainer}
          ref={inViewRef}
          variants={slide}
          initial="initial"
          animate={inView ? 'enter' : 'initial'}
        >
          <div className={styles.container}>
            {/* <ImageSlider imageArray={['/images/motif.jpg']} /> */}
            <div className={styles.heading}>
              <div className={styles.logoContainer}>
                <Image
                  src="/assets/1952-main-logo-white.png"
                  width={943}
                  height={1127}
                  alt="1952 Africa logo"
                  draggable={false}
                />
              </div>
              <h3>{title}</h3>
            </div>
          </div>
        </motion.div>
      </main>
    </Section>
  );
}

export default HeroSlider;
