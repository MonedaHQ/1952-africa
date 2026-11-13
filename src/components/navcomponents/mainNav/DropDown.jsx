import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';

import styles from './styles/dropdown.module.css';

function DropDown({ dropdownList, isOpen }) {
  return (
    <div className={`${styles.dropDown} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.dropDownList}>
        {dropdownList.map((link) => (
          <li key={link.label}>
            <Link href={link.path} className={styles.item} tabIndex={isOpen ? 0 : -1}>
              <span>{link.label}</span>
              <PiArrowUpRight aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
