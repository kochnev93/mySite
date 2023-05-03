import cx from 'classnames';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//Styles
import styles from './404.module.scss';

type Props = {
  className?: string;
  id?: string;
};

const declination = (
  number: number,
  one: string,
  two: string,
  five: string
) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};

const PageNotfound: React.FC = () => {
  const router = useRouter();

  const [timer, setTimer] = useState<number>(15);

  const linkRef = useRef<HTMLAnchorElement>(null);
  const emodjiRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (linkRef.current !== null) {
      linkRef.current.addEventListener('mouseover', () => {
        if (emodjiRef.current !== null) {
          emodjiRef.current.style.display = `block`;
        }
      });

      linkRef.current.addEventListener('mouseout', () => {
        if (emodjiRef.current !== null) {
          emodjiRef.current.style.display = `none`;
        }
      });
    }
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prev: number) => {
        if (prev <= 0) {
          router.push('/');
          return prev;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>
          404 <span> | </span>
        </h2>
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
      <p className={styles.subtitle}>
        До перехода на главную страницу осталось&nbsp;{timer}&nbsp;
        {declination(timer, 'секунда', 'секунды', 'секунд')}
      </p>

      <Link href="/" ref={linkRef}>
        На главную
      </Link>
    </div>
  );
};

export default PageNotfound;
