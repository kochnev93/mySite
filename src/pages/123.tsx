import Head from 'next/head';
import Home from '@/components/screens/Home/Home';
import Cursor from '@/components/Cursor/Cursor';
import Contaier from '@/components/screens/Container/Container';
import Header from '@/components/Header/Header';
import About from '@/components/screens/About/About';




export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Обо мне - kochnev</title>
        <meta name="description" content="Привет, меня зовут Антон, это страница обо мне" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />
      <Contaier>
        <Header/>


        <main className="main">
          <Home />
          <div style={{height: '100%', width: '100%', position: 'relative'}}>
          <About className={`page active`}/> 
          </div>
        </main>

      </Contaier>
    </>
  );
}
