import Image from 'next/image';
import { motion } from 'framer-motion';

import Button from '@/components/Button';
import NavLink from './NavLink';

import styles from './styles/navigation.module.css';
import { homeMenuLinks } from '@/data/menu';
import { useRouter } from 'next/router';

function Navigation({ scrollPosition, darkHero = false, bg = true }) {
  const isHero = scrollPosition > 100;
  const router = useRouter();

  const dark = darkHero && !isHero ? 'dark' : '';
  const white = darkHero && !isHero ? '-white' : '';

  const buttonStyle = darkHero && !isHero ? 'primary-reverse' : 'primary';
  return (
    <header
      className={`${styles.navContainer} ${
        isHero || bg ? styles.whiteBg : ''
      } ${dark && styles[dark]}`}
    >
      <div className={styles.logoContainer}>
        <Image
          src={`/assets/1952-logo-small${white}.png`}
          width={88.41}
          height={49.22}
          alt="1952 Africa Logo"
          draggable={false}
          className={styles.logo}
          onClick={() => router.push('/')}
        />
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {homeMenuLinks.map((link) => (
            <NavLink key={link.label} link={link} motion={motion} />
          ))}
        </ul>
      </nav>

      <Button variant={buttonStyle} onClick={() => router.push('/donate')}>
        Support Us
      </Button>
    </header>
  );
}

export default Navigation;
