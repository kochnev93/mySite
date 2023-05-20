import { FC } from 'react';
import styles from './Social.module.scss';

//Icons
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaTelegram } from 'react-icons/fa';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const Social: FC = () => {
  return (
    <ul className={styles.social}>
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
  </ul>
  );
};

export default Social;