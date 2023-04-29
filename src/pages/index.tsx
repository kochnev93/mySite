import Cursor from '@/components/Cursor/Cursor';
import Background from '@/components/Background/Background';
import Layout from '@/components/Layouts/LayoutMain/Layout';
import Main from '@/components/screens/Main/Main';
import Meta from '@/components/SEO/Meta';

export default function HomePage() {
  return (
    <>
      <Meta
        title="Frontend-разработчик"
        description="Портфолио Кочнева Антона, frontend-разработчика"
      />

      <Cursor />

      <Layout>
        <Main />
      </Layout>

      <Background />
    </>
  );
}
