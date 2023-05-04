import { FC } from 'react';
import styles from './Home.module.scss';
import PrintedText from '@/components/PrintedText/PrintedText';
import Image from 'next/image';
import Social from '@/components/_elements/Social/Social';
import PhotoViewer from '@/components/_elements/PhotoViewer/PhotoViewer';

import { HiOutlineDownload } from 'react-icons/hi';
import { FaTelegramPlane } from 'react-icons/fa';

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

        <div className={styles.photo_wrapper}>
          <PhotoViewer
            className={styles.photo}
            hoverEffects={false}
            images={[
              { src: '/my_photo.webp', alt: 'Кочнев Антон' },
            ]}
          />
        </div>

        <h1 className={styles.bio__title}>Кочнев Антон</h1>

        <PrintedText />

        <Social/>

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
