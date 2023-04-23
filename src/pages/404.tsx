import Head from 'next/head';
import Cursor from '@/components/Cursor/Cursor';
import Background from '@/components/Background/Background';
import Link from 'next/link';
import PageNotfound from '@/components/screens/404/404';


export default function Page404() {
  return (
    <>
      <Head>
        <title>Страница не найдена</title>
        <meta
          name="description"
          content="Привет, меня зовут Антон, это страница обо мне"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageNotfound />

      <Cursor />

      <Background />
    </>
  );
}
