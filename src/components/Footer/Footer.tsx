import { FC } from 'react';
import { AiFillHeart } from 'react-icons/Ai';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      &#169; {new Date().getFullYear()}, Разработано&nbsp;
      <a href="https://github.com/kochnev93">мной</a>&nbsp;с&nbsp;
      <AiFillHeart />
    </footer>
  );
};

export default Footer;
