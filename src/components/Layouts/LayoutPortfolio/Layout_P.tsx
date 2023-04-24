import { ReactNode } from 'react';
import styles from './Layout_P.module.scss';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import Layout from '../LayoutMain/Layout';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout_P = ({ children, title }: Props) => {
  return (
    <Layout>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href={'/#portfolio'}>&#8249; Назад </Link>
          <h1>{title}</h1>
        </header>
        <main className={styles.main}>{children}</main>
      </div>

    </div>
    </Layout>

  );
};

export default Layout_P;
