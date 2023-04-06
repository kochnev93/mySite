import Preloader from '@/components/Preloader/Preloader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Loading() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.asPath && setLoading(true);
    };

    const handleComplete = (url) => {
      url === router.asPath &&
        setTimeout(() => {
          setLoading(false);
        }, 5000);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return loading && (<h1>Загрузка</h1>)
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Loading />
    <Component {...pageProps} />
    </>
  )

}
