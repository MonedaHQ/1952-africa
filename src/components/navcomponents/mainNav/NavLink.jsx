import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PiCaretDown } from 'react-icons/pi';

import DropDown from './DropDown';

import styles from './styles/navlink.module.css';

function NavLink({ link }) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  const isActive = link.path
    ? pathname === link.path
    : link.dropdown?.some((item) => pathname.startsWith(item.path));

  if (!link.dropdown) {
    return (
      <li>
        <Link
          href={link.path}
          className={`${styles.trigger} ${isActive ? styles.active : ''}`}
        >
          {link.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className={styles.navLink}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
      onKeyDown={(event) => event.key === 'Escape' && setIsOpen(false)}
    >
      <button
        type="button"
        className={`${styles.trigger} ${isActive ? styles.active : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((open) => !open)}
      >
        {link.label}
        <PiCaretDown className={`${styles.caret} ${isOpen ? styles.caretOpen : ''}`} />
      </button>
      <DropDown dropdownList={link.dropdown} isOpen={isOpen} />
    </li>
  );
}

export default NavLink;
