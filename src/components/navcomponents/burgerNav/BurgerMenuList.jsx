import { useRouter } from 'next/router';

import { homeMenuLinks } from '@/data/menu';
import { contactInfo } from '@/data/footerLinks';
import { menuSlide } from '@/utils/anim';

import Bands from '@/components/Bands';
import Button from '@/components/Button';
import BurgerNavLinks from './BurgerNavLinks';

import styles from './styles/burgermenulist.module.css';

function BurgerMenuList({ motion, closeMenu }) {
  const router = useRouter();
  const isHomepage = router.pathname === '/';

  const navigationList = isHomepage
    ? homeMenuLinks
    : [{ label: 'Home', path: '/' }, ...homeMenuLinks];

  return (
    <motion.nav
      className={styles.panel}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      aria-label="Mobile"
    >
      <div className={styles.scroll}>
        <p className={styles.title}>Menu</p>
        <ul className={styles.navigationList}>
          {navigationList.map((nav, index) => (
            <BurgerNavLinks
              key={nav.label}
              data={{ nav, index }}
              motion={motion}
              closeMenu={closeMenu}
            />
          ))}
        </ul>

        <div className={styles.footer}>
          <Button variant="primary-reverse" href="/donate" onClick={closeMenu}>
            Support us
          </Button>
          <a href={`mailto:${contactInfo.data.email}`} className={styles.mail}>
            {contactInfo.data.email}
          </a>
        </div>
      </div>
      <Bands tone="gold" size="sm" />
    </motion.nav>
  );
}

export default BurgerMenuList;
