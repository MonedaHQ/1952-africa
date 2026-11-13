import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import NavLink from './NavLink';

import styles from './styles/navigation.module.css';
import { homeMenuLinks } from '@/data/menu';

function Navigation({ scrollPosition, darkHero = false }) {
  const scrolled = scrollPosition > 40;
  const overHero = darkHero && !scrolled;

  return (
    <header
      className={`${styles.navContainer} ${overHero ? styles.overHero : ''} ${
        scrolled ? styles.scrolled : ''
      }`}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink} aria-label="1952 Africa — home">
          <Image
            src={`/assets/1952-logo-small${overHero ? '-white' : ''}.png`}
            width={943}
            height={525}
            alt="1952 Africa"
            draggable={false}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.navigation} aria-label="Primary">
          <ul className={styles.navigationList}>
            {homeMenuLinks.map((link) => (
              <NavLink key={link.label} link={link} />
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button variant={overHero ? 'primary-reverse' : 'primary'} href="/donate">
            Support us
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
