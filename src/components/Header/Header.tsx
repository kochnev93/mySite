import { FC, useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RxHamburgerMenu } from 'react-icons/Rx';
import PrintedText from '../PrintedText/PrintedText';
import cx from 'classnames';

//Icons
import { FaUserAlt } from 'react-icons/Fa';

import Image from 'next/image';
import scrollPage from '@/utils/scroll';

const Header: FC = () => {
  const { asPath } = useRouter();

  const [visible, setVisible] = useState(true);

  const [menu, setMenu] = useState([
    {
      id: 1,
      title: 'Главная',
      href: '#123',
      activeClass: '',
    },
    {
      id: 2,
      title: 'Обо мне',
      href: '#456',
      activeClass: '',
    },
    {
      id: 3,
      title: 'Резюме',
      href: '#789',
      activeClass: '',
    },
  ]);

  useEffect(() => {
    let newMnenu = menu.map((item) => {
      if (asPath === `/${item.href}`) {
        return { ...item, activeClass: styles.active };
      }
      return { ...item, activeClass: '' };
    });

    setMenu(newMnenu);
  }, [asPath]);

  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.profile__logo}>
          <div className={styles.logo__wrapper}>
            <Image
              src="/photo3.webp"
              alt="Кочнев Антон"
              width={300}
              height={300}
              quality={50}
            />
          </div>
          <div>
            <h4>Кочнев Антон</h4>
            <PrintedText />
          </div>
        </div>

        <div className={styles.profile__action}>
          <RxHamburgerMenu
            onClick={() => {
              setVisible(!visible);
            }}
          />
        </div>
      </div>
      <nav className={cx(styles.nav, { [styles.active]: visible })}>
        <ul className={styles.menu}>
          {menu.map((item) => {
            return (
              <li
                key={item.id}
                className={item.activeClass}
                // onClick={() => {
                //   scrollPage(item.href)
                // }}
              >
                <Link href={item.href}>
                  <FaUserAlt />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}

          {/* <li className={`${asPath === '/' ? styles.active : ''}`}>
            <Link href={'/'}>
              <FaUserAlt />
              <span>Главная</span>
            </Link>
          </li>
          <li className={`${asPath === '/#456' ? styles.active : ''}`}>
            <Link href={'#456'}>
              <FaUserAlt />
              <span>Обо мне</span>
            </Link>
          </li>
          <li className={`${asPath === '/#789' ? styles.active : ''}`}>
            <Link href={'#789'}>
              <FaUserAlt />
              <span>Резюме</span>
            </Link>
          </li> */}

          {/* <li className={`${asPath === '/123' ? styles.active : ''}`}>
            <Link href={'/123'}>
              <FaUserAlt />
              <span>Тест 2</span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
