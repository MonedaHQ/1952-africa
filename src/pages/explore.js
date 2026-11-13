import Link from 'next/link';
import { motion } from 'framer-motion';
import { PiArrowUpRight } from 'react-icons/pi';

import BgHero from '@/components/BgHero';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navcomponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navcomponents/mainNav/Navigation';
import { useArtworks } from '@/hooks/useArtworks';
import useScrollPosition from '@/hooks/useScrollPosition';
import { scrollOffset } from '@/utils/config';

import styles from './explore/styles/explore.module.css';

const explore = [
  { label: 'Our Programs', path: '/programs' },
  { label: 'Our Events', path: '/events' },
  { label: 'Discover our Artists', path: '/artists' },
  { label: 'Visit our Gallery', path: '/gallery' },
  { label: 'About us', path: '/about' },
  { label: 'The 1952 Africa Raffle', path: '/raffle' },
];

const ease = [0.2, 0.7, 0.2, 1];

function Explore() {
  const scrollPosition = useScrollPosition(scrollOffset);
  const artworks = useArtworks();

  return (
    <>
      <MetaTags
        title="Explore - 1952 Africa"
        description="Empowering African Creativity - Explore the essence of 1952Africa, our mission, and the incredible artistry we're empowering. Join us on this inspiring journey and see the change you're making possible."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={true} />
      <BurgerNavigation />
      <BgHero slideShow={artworks}>
        <div className={styles.body}>
          <span className="eyebrow">Art · Culture · History</span>
          <h1>Explore 1952 Africa</h1>
          <ul className={styles.linkContainer}>
            {explore.map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.2 + index * 0.07 }}
              >
                <Link href={link.path}>
                  <span className={styles.label}>{link.label}</span>
                  <PiArrowUpRight aria-hidden="true" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </BgHero>
    </>
  );
}

export default Explore;
