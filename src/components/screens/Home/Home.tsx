import { FC } from 'react';
import styles from './Home.module.scss';
import PrintedText from '@/components/PrintedText/PrintedText';
import Image from 'next/image';

import { HiOutlineDownload } from 'react-icons/hi';
import { FaTelegramPlane } from 'react-icons/fa';

//Icons
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaTelegram } from 'react-icons/fa';
import { FaPhoneSquareAlt } from 'react-icons/fa';

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
        <div className={styles.social}>
          <a href="https://github.com/kochnev93" target="_blank">
            <IoLogoGithub />
          </a>

          <a href="https://www.linkedin.com/in/kochnev-ae" target="_blank">
            <IoLogoLinkedin />
          </a>

          <a href="https://t.me/kochnev_ae" target="_blank">
            <FaTelegram />
          </a>

          <a href="tel:+79995285154">
            <FaPhoneSquareAlt />
          </a>
        </div>
      </div>

      <div className={styles.actions}>
        <div>
          <a href="/assets/Resume Kochnev_AE.pdf" download>
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
