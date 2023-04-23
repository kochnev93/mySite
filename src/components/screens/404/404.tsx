import cx from 'classnames';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

//Styles
import styles from './404.module.scss';

type Props = {
  className?: string;
  id?: string;
};

const PageNotfound: React.FC = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const linkRef = useRef(null);
  const emodjiRef = useRef(null);

  useEffect(() => {
    linkRef.current.addEventListener('mouseover', () => {
      emodjiRef.current.style.display = `block`;
    });

    linkRef.current.addEventListener('mouseout', () => {
      emodjiRef.current.style.display = `none`;
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>404 <span> | </span></h2>
        <span>Данная страница не найдена</span>
        <div className={styles.emodji}>
          <span className={cx(styles.emodji_item, styles.emodji_not)}>
            &#128532;
          </span>
          <span
            className={cx(styles.emodji_item, styles.emodji_hover)}
            ref={emodjiRef}
          >
            &#128526;
          </span>
        </div>
      </div>

      <Link href="/" ref={linkRef}>
        На главную
      </Link>
    </div>
  );
};

export default PageNotfound;
