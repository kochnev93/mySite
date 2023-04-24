import cx from 'classnames';
import { portfolioData } from '@/data/portfolio/portfolio';
import { useInView } from 'react-intersection-observer';

//Styles
import styles from './Portfolio.module.scss';

// Components
import PageItem from '@/components/PageItem/PageItem';
import PortfolioCard from './PortfolioCard';
import PortfolioList from './PortfolioList';

type Props = {
  className?: string;
  id?: string;
};

const Portfolio: React.FC<Props> = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div
      id={props.id}
      className={cx(styles.portfolio, props.className)}
      data-label={'Works'}
    >
      <PageItem title="Портфолио">
        <PortfolioList />
      </PageItem>
    </div>
  );
};

export default Portfolio;
