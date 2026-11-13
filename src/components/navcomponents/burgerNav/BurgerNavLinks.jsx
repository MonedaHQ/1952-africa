import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PiPlus } from 'react-icons/pi';

import { slide } from '@/utils/anim';

import BurgerDropDown from './BurgerDropDown';
import styles from './styles/burgernavlinks.module.css';

function BurgerNavLinks({ motion, data, closeMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const { nav, index } = data;
  const { pathname } = useRouter();

  const dropdown = nav.dropdown;

  return (
    <motion.li
      className={styles.link}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      custom={index}
    >
      {dropdown ? (
        <button
          type="button"
          className={styles.navLink}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {nav.label}
          <PiPlus className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} />
        </button>
      ) : (
        <Link
          href={nav.path}
          className={`${styles.navLink} ${pathname === nav.path ? styles.current : ''}`}
          onClick={closeMenu}
        >
          {nav.label}
        </Link>
      )}

      {dropdown && isOpen && <BurgerDropDown dropdown={dropdown} />}
    </motion.li>
  );
}

export default BurgerNavLinks;
