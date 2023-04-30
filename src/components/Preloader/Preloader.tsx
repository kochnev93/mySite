import { FC } from 'react';
import styles from './Preloader.module.scss';

const Preloader: FC = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* <span className={styles.loader}>Loading</span> */}
    </div>
  );
};

export default Preloader;
