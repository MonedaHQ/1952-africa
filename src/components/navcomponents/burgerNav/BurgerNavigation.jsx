import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import { useMenuToggler } from '@/context/MenuToggleContext';
import { overlayVariants } from '@/utils/anim';

import BurgerMenuList from './BurgerMenuList';

import styles from './styles/burgernavigation.module.css';

function BurgerNavigation() {
  const { isMenuOpen, closeMenu, toggleMenu } = useMenuToggler();
  const router = useRouter();

  // lock page scroll while the menu is open, close on Escape / navigation
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    function onKey(event) {
      if (event.key === 'Escape') closeMenu();
    }
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen]);

  useEffect(() => {
    router.events.on('routeChangeStart', closeMenu);
    return () => router.events.off('routeChangeStart', closeMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  return (
    <div className={styles.navigation}>
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.isOpen : ''}`}
        onClick={() => toggleMenu()}
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.overlay}
            variants={overlayVariants}
            initial="initial"
            animate="visible"
            exit="exit"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isMenuOpen && <BurgerMenuList motion={motion} closeMenu={closeMenu} />}
      </AnimatePresence>
    </div>
  );
}

export default BurgerNavigation;
