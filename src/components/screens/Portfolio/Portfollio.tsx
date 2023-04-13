import cx from 'classnames';

//Styles
import styles from './Portfolio.module.scss';

// Components
import PageItem from '@/components/PageItem/PageItem';
import PortfolioCard from './PortfolioCard';

//Icons
import { MdWorkOutline } from 'react-icons/Md';
import { MdSchool } from 'react-icons/Md';

type Props = {
  className?: string;
  id?: string;
};

const Portfolio: React.FC<Props> = (props) => {
  return (
    <div
      id={props.id}
      className={cx(styles.portfolio, props.className)}
      data-label={'Works'}
    >
      <PageItem title="Портфолио">
        <div className={styles.portfolio_block}>
          <PortfolioCard title="Smart Schhol" />
          <PortfolioCard title="Smart Schhol" />
          <PortfolioCard title="Smart Schhol" />
          <PortfolioCard title="Smart Schhol" />
        </div>
      </PageItem>
    </div>
  );
};

export default Portfolio;
