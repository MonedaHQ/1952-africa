import BgHero from '@/components/BgHero';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import { slideshowImages } from '@/data/slideshowImages';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';

import styles from './explore/styles/explore.module.css';
import Button from '@/components/Button';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { slideUp } from '@/utils/anim';

function Explore() {
  const scrollPosition = useScrollPosition(scrollOffset);

  return (
    <>
      <MetaTags
        title="Explore - 1952 Africa"
        description="Empowering African Creativity - Explore the essence of 1952Africa, our mission, and the incredible artistry we're empowering. Join us on this inspiring journey and see the change you're making possible."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={true} bg={false} />
      <BurgerNavigation />
      <ExploreContent />
    </>
  );
}

function ExploreContent() {
  const explore = [
    { label: 'Explore our Programs', path: '/programs' },
    { label: 'Our Events', path: '/events' },
    { label: 'Disover our Artists', path: '/artists' },
    { label: 'Visit our Gallery', path: '/gallery' },
    { label: 'Learn more About us', path: '/about' },
    { label: 'The 1952 Africa Raffle', path: '/raffle' },
  ];

  const router = useRouter();

  return (
    <BgHero slideShow={slideshowImages}>
      <div className={styles.body}>
        <h2>Explore 1952 Africa</h2>
        <motion.ul
          className={styles.linkContainer}
          variants={slideUp}
          initial="initial"
          animate="enter"
        >
          {explore.map((link) => (
            <li key={link.label}>
              <Button
                variant="link-light"
                onClick={() => router.push(link.path)}
              >
                {link.label}
              </Button>
            </li>
          ))}
        </motion.ul>
      </div>
    </BgHero>
  );
}
export default Explore;
