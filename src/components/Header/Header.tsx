import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { menuData } from '@/data/menu/menu';

//Styles
import styles from './Header.module.scss';

//Components
import PrintedText from '../PrintedText/PrintedText';
import Menu from './Menu';
import ScrollProgress from '../_elements/ScrollProgress/ScrollProgress';


//Icons
 

import { FaUserAlt } from 'react-icons/fa'

import { RxHamburgerMenu } from 'react-icons/rx';

//Next
import Image from 'next/image';



const Header: FC = () => {
  const { asPath } = useRouter();

  const [visible, setVisible] = useState(true);

  const [menu, setMenu] = useState(menuData);

  useEffect(() => {
    let newMenu = menu.map((item) => {
      if (asPath === `/${item.href}`) {
        return { ...item, activeClass: styles.active };
      }
      return { ...item, activeClass: '' };
    });

    setMenu(newMenu);
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

      <ScrollProgress/>

      <Menu items={menu} visible={visible}/>

    </header>
  );
};

export default Header;
