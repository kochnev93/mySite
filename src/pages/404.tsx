import Cursor from '@/components/Cursor/Cursor';
import Background from '@/components/Background/Background';
import PageNotfound from '@/components/screens/404/404';
import Meta from '@/components/SEO/Meta';


export default function Page404() {
  return (
    <>
      <Meta title='Страница не найдена' />

      <PageNotfound />

      <Cursor />

      <Background />
    </>
  );
}
