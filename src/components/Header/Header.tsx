import { FC } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href={'/123'}>123</Link>
          </li>
          <li>
            <Link href={'#456'}>456</Link>
          </li>
          <li>
            <Link href={'#789'}>789</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
