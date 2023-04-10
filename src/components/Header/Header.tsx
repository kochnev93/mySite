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
      title: 'Обо мне',
      href: '',
      activeClass: '',
    },
    {
      id: 2,
      title: 'Резюме',
      href: '#resume',
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

        </ul>
      </nav>
    </header>
  );
};

export default Header;
