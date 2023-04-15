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
        <meta name="description" content="Привет, меня зовут Антон, это страница обо мне" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cursor />

      <Contaier>



        <main className="main">
          <Link href={'/#portfolio'}>Назад </Link>
        </main>

        

      </Contaier>

      <Footer />

<Background />
    </>
  );
}
