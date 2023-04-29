import Header from '@/components/Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfollio';

import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

import styles from './Main.module.scss';

type Props = {
  className?: string;
  id?: string;
};

const Main: React.FC<Props> = (props) => {
  const router = useRouter();
  const { asPath } = useRouter();
  const [activeUrl, setActiveUrl] = useState<string>('/');

  useEffect(() => {
    setActiveUrl(asPath);
  }, [asPath]);

  const rootRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {

    console.log(`About is visible: ${isInView}`);
  }, [isInView]);

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home_container}>
        <Header />

        <main className={styles.main} >
          <Home />

          <div style={{ height: '100%', width: '100%', position: 'relative' }}>

              <About className={`page ${activeUrl === '/' ? 'active' : ''}`} ref={ref} />


            <Resume
              className={`page ${activeUrl === '/#resume' ? 'active' : ''}`}
            />

            <Portfolio
              className={`page ${activeUrl === '/#portfolio' ? 'active' : ''}`}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
