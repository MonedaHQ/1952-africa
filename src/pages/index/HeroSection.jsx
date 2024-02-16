import { slideshowImages } from '@/data/slideshowImages';

import Slider from 'react-slick';

import styles from './styles/herosection.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Button from '@/components/Button';
import { headerAnimation } from '@/utils/anim';
import { useSmoothScroll } from '@/context/SmoothScrollContext';
import ImageSlider from '@/components/ImageSlider';
import { useRouter } from 'next/router';
import BgHero from '@/components/BgHero';

function HeroSection({ motion }) {
  const { handleScrollTo } = useSmoothScroll();
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
        <div className={styles.btnContainer}>
          <Button
            variant="primary-reverse"
            onClick={() => router.push('/explore')}
          >
            Explore
          </Button>
          <Button
            variant="link-dark"
            onClick={() => handleScrollTo('main', 180)}
          >
            Learn more
          </Button>
        </div>
      </>
    </BgHero>
  );
}

export default HeroSection;
