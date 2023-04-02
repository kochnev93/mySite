import Head from 'next/head';
import Home from '@/components/screens/Home/Home';
import Cursor from '@/components/Cursor/Cursor';
import Contaier from '@/components/screens/Container/Container';
import Header from '@/components/Header/Header';
import About from '@/components/screens/About/About';
import Resume from '@/components/screens/Resume/Resume';
import { useRouter } from 'next/router';



export default function HomePage() {
  const {asPath} = useRouter()
  console.log(asPath)
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cursor />

      <Contaier>
        <Header />
        <main className="main">
          <Home />
          <div style={{height: '100%', width: '100%', position: 'relative'}}>
            <About className={`page ${asPath === '/#456' ? 'active' : ''}`} />
            <Resume className={`page ${asPath === '/#789' ? 'active' : ''}`} />
          </div>
        </main>
      </Contaier>
    </>
  );
}
