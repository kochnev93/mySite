import cx from 'classnames';
import { portfolioData } from '@/data/portfolio/portfolio';
//import { useInView } from 'react-intersection-observer';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

//Styles
import styles from './Portfolio.module.scss';

// Components
import PortfolioCard from './PortfolioCard';

const PortfolioList: React.FC = () => {
  // const { ref, inView, entry } = useInView({
  //   threshold: 0,
  // });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ul
      className={cx(styles.portfolio_block, { [styles.view]: isInView })}
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
