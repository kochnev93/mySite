import cx from 'classnames';
import { ReactNode } from 'react';

//Styles
import styles from './Portfolio.module.scss';

type Props = {
  children?: ReactNode;
  title: string;
  subtitle?: string;
};

const style = {
    background: `url('/smart_school.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const PortfolioCard: React.FC<Props> = (props) => {
  return (
  <div className={styles.card} style={style}>
    {/* <img src="./smart_school.png" alt="Smart School" /> */}
    <h6>Smart School</h6>
    <a href="/123">Подробнее</a>
  </div>
  );
};

export default PortfolioCard;
