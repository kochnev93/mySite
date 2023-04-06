import { FC, useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths  } from 'next';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RxHamburgerMenu } from 'react-icons/Rx';
import PrintedText from '../PrintedText/PrintedText';
//Icons
import { FaUserAlt } from 'react-icons/Fa';

const Header: FC = () => {
  //const { asPath } = useRouter();
  //console.log(asPath);
  //console.log(menu)

  const { asPath } = useRouter();
  console.log('asPath', asPath);

  const router = useRouter();
  // router.push('/#123')
  // router.push('/#456')
  console.log('router', router);

  const [visible, setVisible] = useState(true);
  const [activeLink, setActiveLink] = useState('');

  // const menu = [
  //   {
  //     id: 1,
  //     title: 'Главная',
  //     href: '#123',
  //     activeClass: asPath === '/#123' ? 'active' : '',
  //   },
  //   {
  //     id: 2,
  //     title: 'Обо мне',
  //     href: '#456',
  //     activeClass: asPath === '/#456' ? 'active' : '',
  //   },
  //   {
  //     id: 3,
  //     title: 'Резюме',
  //     href: '#789',
  //     activeClass: asPath === '/#789' ? 'active' : '',
  //   },
  // ];

  // const xxx = props.xxx.map((item) => {
  //   console.log(item, asPath)
  //   return (
  //     <li className={`${item.activeClass} ${asPath === item.href ? 'active' : ''}`}>
  //       <Link href={item.href}>
  //         <FaUserAlt />
  //         <span>{item.title}</span>
  //       </Link>
  //     </li>
  //   );
  // });

  //console.log(xxx);

  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.profile__logo}>
          <div className={styles.logo__wrapper}>
            <img src="./photo2.jpg" alt="" />
          </div>
          <div>
            <h4>Кочнев Антон</h4>
            <PrintedText />
          </div>
        </div>

        <div className={styles.profile__action}>
          <RxHamburgerMenu />
        </div>
      </div>
      <nav>
        <ul className={styles.menu}>
          <li className={`${asPath === '/' ? styles.active : ''}`}>
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

export const getStaticProps = async (context) => {
  console.log(context);
  return {
    props: {},
  };
};

export default Header;
