import { FC } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href={'#123'}>Главная</Link>
          </li>
          <li>
            <Link href={'#456'}>Обо мне</Link>
          </li>
          <li>
            <Link href={'#789'}>Резюме</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
