import { FC } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

//Icons
import { FaUserAlt } from 'react-icons/Fa';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href={'#123'}>
              <FaUserAlt/>
              <span>Главная</span>
            </Link>
          </li>
          <li>
            <Link href={'#456'}>О</Link>
          </li>
          <li>
            <Link href={'#789'}>Р</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
