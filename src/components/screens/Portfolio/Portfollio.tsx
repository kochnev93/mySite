import cx from 'classnames';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'
import { useRouter } from 'next/router';

//Styles
import styles from './Portfolio.module.scss';

// Components
import PageItem from '@/components/PageItem/PageItem';
import PortfolioList from './PortfolioList';

type Props = {
  className?: string;
  id?: string;
};

const Portfolio: React.FC<Props> = (props) => {
  const router = useRouter();

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  // useEffect(() => {
  //   if(inView) router.push('/#portfolio')
  // }, [inView])


  return (
    <div
      id={props.id}
      className={cx(styles.portfolio, props.className)}
      data-label={'Works'}
      ref={ref}
    >
      <PageItem title="Портфолио">
        <PortfolioList />
      </PageItem>
    </div>
  );
};

export default Portfolio;
