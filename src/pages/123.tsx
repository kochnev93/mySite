import Head from 'next/head';
import Home from '@/components/screens/Home/Home';
import Cursor from '@/components/Cursor/Cursor';
import Contaier from '@/components/screens/Container/Container';
import Header from '@/components/Header/Header';
import About from '@/components/screens/About/About';
import Footer from '@/components/Footer/Footer';
import Background from '@/components/Background/Background';
import Link from 'next/link';




export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Портфолио - Smart School</title>
        <meta name="description" content="Привет, меня зовут Антон, это страница обо мне" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cursor />

      <Contaier>



        <main className="main">

          <div style={{height: '100%', width: '100%', position: 'relative'}}>
          <Link href={'/'}>Назад </Link>
          </div>
        </main>

        <Link href={'/#portfolio'}>Назад </Link>

      </Contaier>

      <Footer />

<Background />
    </>
  );
}
