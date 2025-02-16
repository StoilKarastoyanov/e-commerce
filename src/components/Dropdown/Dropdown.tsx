import { DropdownOptions } from '../types';
import Link from 'next/link';
import styles from './dropdown.module.css';

const Dropdown = (dropdownOptions: DropdownOptions) => {
  if (!dropdownOptions) return null
  const { name, options } = dropdownOptions;

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownToggle}>{name.toUpperCase()}</div>
      <div className={styles.dropdownMenu}>
        <div className={styles.menuWrapper}>
          {options.map((option) => {
            const href = `/${name.toLowerCase()}/${option.toLowerCase()}`;
            return (
              <Link href={href} key={option} className={styles.dropdownItem}>
                {option.toUpperCase()}
              </Link>
            )
          })}
        </div>
      </div>
    </div >
  );
};

export default Dropdown;