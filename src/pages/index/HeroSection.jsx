import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { headerAnimation } from '@/utils/anim';
import { slideshowImages } from '@/data/slideshowImages';
import { useSmoothScroll } from '@/context/SmoothScrollContext';

import BgHero from '@/components/BgHero';
import Button from '@/components/Button';

import styles from './styles/herosection.module.css';

function HeroSection() {
  const router = useRouter();

  return (
    <BgHero slideShow={slideshowImages}>
      <>
        <div className={styles.textContent}>
          <div className={styles.headingMask}>
            <motion.h1
              className={styles.heading}
              variants={headerAnimation}
              initial="initial"
              animate="enter"
            >
              Empowering <span>African</span> Creativity
            </motion.h1>
          </div>
          <p>
            Explore the essence of 1952Africa, our mission, and the incredible
            artistry we&lsquo;re empowering. Join us on this inspiring journey
            and discover the positive impact we&lsquo;re making possible.
          </p>
        </div>
        <Buttons />
      </>
    </BgHero>
  );
}

function Buttons() {
  const { handleScrollTo } = useSmoothScroll();
  return (
    <div className={styles.btnContainer}>
      <Button variant="primary-reverse" onClick={() => router.push('/explore')}>
        Explore
      </Button>
      <Button variant="link-dark" onClick={() => handleScrollTo('main', 180)}>
        Learn more
      </Button>
    </div>
  );
}

export default HeroSection;
