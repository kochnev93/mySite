import cx from 'classnames';
import { portfolioData } from '@/data/portfolio/portfolio';
import { useInView } from 'react-intersection-observer';

//Styles
import styles from './Portfolio.module.scss';

// Components
import PortfolioCard from './PortfolioCard';


const PortfolioList: React.FC = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <ul
      className={cx(styles.portfolio_block, { [styles.view]: inView })}
      ref={ref}
    >
      {portfolioData.map((item) => {
        return (
          <PortfolioCard
            key={item.id}
            title={item.title}
            href={item.href}
            img={item.img}
          />
        );
      })}
    </ul>
  );
};

export default PortfolioList;
