import {useEffect, useState} from 'react'
import styles from './ScrollProgress.module.scss';

type Props = {
  className?: string;
  id?: string;
};

const ScrollProgress: React.FC<Props> = (props) => {
    const [scrolled, setScrolled] = useState<string>('0%');

    useEffect(() => {

        const scrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;

            const winHeightPx =
              document.documentElement.scrollHeight -
              document.documentElement.clientHeight;
            const scrolled = `${ Math.floor(scrollPx / winHeightPx * 100) }%`;

            setScrolled(scrolled)

          };

          
        window.addEventListener("scroll", scrollProgress);

        return () => {window.removeEventListener("scroll", scrollProgress);}
    })
  
      const progressBarStyle = {
        width: scrolled,
      };

  return (
    <div className={styles.container}>
        <div className={styles.bar} style={progressBarStyle} />
    </div>
  );
};

export default ScrollProgress;
