import cx from 'classnames';
import { ReactNode } from 'react';
import Link from 'next/link';

//Styles
import styles from './Portfolio.module.scss';

type Props = {
  children?: ReactNode;
  title: string;
  href: string;
  img: string;
  subtitle?: string;
};

const PortfolioCard: React.FC<Props> = (props) => {
  const style = {
    background: `url('/${props.img}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <li className={styles.card} style={style}>
      <h6>{props.title}</h6>
      <Link href={props.href}>Подробнее</Link>
    </li>
  );
};

export default PortfolioCard;
