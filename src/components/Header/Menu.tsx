import { FC } from 'react';
import cx from 'classnames';
import { IMenu } from '@/data/menu/menu';

//Styles
import styles from './Header.module.scss';

//Icons
import { FaUserAlt } from 'react-icons/Fa';
import { CgFileDocument } from 'react-icons/Cg';
import { BsPersonWorkspace } from 'react-icons/Bs';

//Next
import Link from 'next/link';

type Props = {
  items: IMenu[];
  visible: boolean;
};

const getIcon = (icon: string) => {
  switch (icon) {
    case 'FaUserAlt':
      return <FaUserAlt />;
    case 'CgFileDocument':
      return <CgFileDocument />;
    case 'BsPersonWorkspace':
      return <BsPersonWorkspace />;
    default:
      return <FaUserAlt />;
  }
};

const Menu: FC<Props> = (props) => {
  return (
    <nav className={cx(styles.nav, { [styles.active]: props.visible })}>
      <ul className={styles.menu}>
        {props.items.map((item) => {
          return (
            <li key={item.id} className={item.activeClass}>
              <Link href={item.href}>
                {getIcon(item.icon)}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
