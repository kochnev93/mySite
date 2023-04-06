import { FC, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RxHamburgerMenu } from 'react-icons/Rx';
import PrintedText from '../PrintedText/PrintedText';
//Icons
import { FaUserAlt } from 'react-icons/Fa';

const Header: FC = () => {
  const { asPath } = useRouter();
  console.log(asPath);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let windowPageYOffset = window.pageYOffset;
    console.log(windowPageYOffset);

    //window.scrollBy(0, 100);
  }, []);

  const menu = [
    {
      id: 1,
      title: 'Главная',
      href: '#123',
      activeClass: `${asPath === '/#123' ? styles.active : ''}`,
    },
  ];

  const activeStyle = 'active';

  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.profile__logo}>
          <div className={styles.logo__wrapper}>
            <img src="./photo2.jpg" alt="" />
          </div>
          <div>
            <h4>Кочнев Антон</h4>
            <PrintedText/>
          </div>
        </div>

        <div className={styles.profile__action}>
          <RxHamburgerMenu />
        </div>
      </div>
      <nav>
        <ul className={styles.menu}>
          {/* {menu.map((item) => {
            <li>
              <Link href={item.href}>
                <FaUserAlt />
                <span>{item.title}</span>
              </Link>
            </li>
          })} */}
          <li className={activeStyle}>
            <Link href={'#123'}>
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
