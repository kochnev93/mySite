import { ReactNode } from 'react';
import styles from './Layout_P.module.scss';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout_P = ({ children, title }: Props) => {
  return (

    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <nav>
              <Link href={'/#portfolio'}>&#8249; Назад </Link>
            </nav>
            <h1>{title}</h1>
          </header>
          <main className={styles.main}>{children}</main>
        </div>
      </div>

      <Footer/>

    </div>


  );
};

export default Layout_P;
