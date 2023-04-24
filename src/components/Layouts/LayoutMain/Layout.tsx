import { ReactNode } from 'react';
import styles from './Layout.module.scss';
import Footer from '@/components/Footer/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
