import Cursor from '@/components/Cursor/Cursor';
import Background from '@/components/Background/Background';
import PortfolioList from '@/components/screens/Portfolio/PortfolioList';
import PageItem from '@/components/PageItem/PageItem';
import Link from 'next/link';
import Layout from '@/components/Layouts/LayoutMain/Layout';
import Meta from '@/components/SEO/Meta';

export default function PortfolioPage() {
  return (
    <>
      <Meta
        title="Портфолио"
        description="Портфолио Кочнева Антона, frontend-разаработчика"
        keywords='Портфолио, кейсы'
      />

      <Cursor />

      <Layout>
        <Link style={{ zIndex: '2', position: 'relative' }} href="/">
          Назад
        </Link>
        <PageItem className="portfolio_section" title="Портфолио">
          <PortfolioList />
        </PageItem>
      </Layout>

      <Background />
    </>
  );
}
