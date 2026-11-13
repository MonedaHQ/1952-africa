import { motion } from 'framer-motion';
import { PiArrowDown, PiArrowRight } from 'react-icons/pi';

import { useArtworks } from '@/hooks/useArtworks';
import { useSmoothScroll } from '@/context/SmoothScrollContext';

import BgHero from '@/components/BgHero';
import Button from '@/components/Button';

import styles from './styles/herosection.module.css';

const ease = [0.2, 0.7, 0.2, 1];

const line = {
  initial: { y: '110%' },
  enter: (i) => ({
    y: 0,
    transition: { duration: 1, ease, delay: 0.15 + i * 0.12 },
  }),
};

const fade = {
  initial: { opacity: 0, y: 16 },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: 0.5 + i * 0.12 },
  }),
};

function HeroSection() {
  const { handleScrollTo } = useSmoothScroll();
  const artworks = useArtworks();

  return (
    <BgHero slideShow={artworks}>
      <div className={styles.textContent}>
        <motion.span
          className={`eyebrow ${styles.eyebrow}`}
          variants={fade}
          custom={0}
          initial="initial"
          animate="enter"
        >
          Art · Culture · History
        </motion.span>

        <h1 className={styles.heading}>
          <span className={styles.mask}>
            <motion.span variants={line} custom={0} initial="initial" animate="enter">
              Empowering
            </motion.span>
          </span>
          <span className={styles.mask}>
            <motion.span variants={line} custom={1} initial="initial" animate="enter">
              <em>African</em> Creativity
            </motion.span>
          </span>
        </h1>

        <div className={styles.lower}>
          <motion.p variants={fade} custom={1} initial="initial" animate="enter">
            Supporting the artists, ideas and cultural expressions shaping a
            more expansive African future.
          </motion.p>

          <motion.div
            className={styles.btnContainer}
            variants={fade}
            custom={2}
            initial="initial"
            animate="enter"
          >
            <Button variant="primary-reverse" href="/explore">
              Explore the foundation <PiArrowRight />
            </Button>
            <span className={styles.scrollBtn}>
              <Button
                variant="link-dark"
                onClick={() => handleScrollTo('main', 60)}
                ariaLabel="Scroll to discover"
              >
                <span className={styles.scrollText}>Scroll to discover</span>
                <PiArrowDown />
              </Button>
            </span>
          </motion.div>
        </div>
      </div>
    </BgHero>
  );
}

export default HeroSection;
