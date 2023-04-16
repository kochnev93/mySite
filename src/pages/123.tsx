import Head from 'next/head';
import Cursor from '@/components/Cursor/Cursor';
import Contaier from '@/components/screens/Container/Container';
import Footer from '@/components/Footer/Footer';
import Background from '@/components/Background/Background';
import Link from 'next/link';

export default function SmartSchool() {
  return (
    <>
      <Head>
        <title>Портфолио - Smart School</title>
        <meta
          name="description"
          content="Привет, меня зовут Антон, это страница обо мне"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Cursor />

      <div className="wrapper">
        <header className='portfolio_header'>
          <Link href={'/#portfolio'}>&#8249; Назад </Link>
          <h1>Smart School</h1>
        </header>

        <main className='portfolio_main'>
          <section>
            <div className="title">
              Smart School
            </div>
          </section>
        </main>

      </div>

      <Footer />

      <Background />
    </>
  );
}
