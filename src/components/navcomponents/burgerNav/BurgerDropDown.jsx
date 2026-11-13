import Link from 'next/link';
import { motion } from 'framer-motion';

import { useMenuToggler } from '@/context/MenuToggleContext';

import styles from './styles/burgerdropdown.module.css';

function BurgerDropDown({ dropdown }) {
  const { closeMenu } = useMenuToggler();

  return (
    <motion.ul
      className={styles.navList}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {dropdown?.map((link) => (
        <li key={link.label}>
          <Link href={link.path} onClick={closeMenu}>
            {link.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}

export default BurgerDropDown;
