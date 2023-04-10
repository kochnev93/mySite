import Preloader from '@/components/Preloader/Preloader';
import '@/styles/globals.css';
import '@/styles/vars.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Loading() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      let timeout = setTimeout(() => {setLoading(false)}, 500);
      //return clearTimeout(timeout)
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [router.events]);

  return loading ? <Preloader/> : <></>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Loading /> 
      <Component {...pageProps} />
    </>
  );
}
