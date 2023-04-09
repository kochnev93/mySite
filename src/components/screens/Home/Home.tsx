import { FC } from 'react';
import styles from './Home.module.scss';
import PrintedText from '@/components/PrintedText/PrintedText';
import Image from 'next/image';

import { HiOutlineDownload } from 'react-icons/Hi';
import { FaTelegramPlane } from 'react-icons/Fa';

const Home: FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.slider}>
        <Image
          src="/wallpaper_1.webp"
          alt=""
          width={500}
          height={500}
          quality={90}
        />
      </div>

      <div className={styles.bio}>
        <div className={styles.img}>
          <div className={styles.img__wrapper}>
            <Image
              src="/photo3.webp"
              alt="Кочнев Антон"
              width={300}
              height={300}
              quality={50}
            />
          </div>
        </div>
        <div className={styles.bio__title}>
          <h1>Кочнев Антон</h1>
        </div>
        <PrintedText />
        <div className={styles.social}>social</div>
      </div>

      <div className={styles.actions}>
        <div>
          <a href="#">
            <span>Скачать резюме</span>
            <HiOutlineDownload />
          </a>
        </div>
        <div>
          <a href="https://t.me/kochnev_ae">
            <span>Написать в Telegram</span>
            <FaTelegramPlane />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
