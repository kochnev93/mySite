import Head from 'next/head';
import Cursor from '@/components/Cursor/Cursor';
import Background from '@/components/Background/Background';
import PageItem from '@/components/PageItem/PageItem';
import Layout_P from '@/components/Layouts/LayoutPortfolio/Layout_P';
import Description from '@/components/_elements/Portfolio/Description/Description';
import PhotoViewer from '@/components/_elements/PhotoViewer/PhotoViewer';
import Steps from '@/components/_elements/Portfolio/SteopsOfDev/Steps';
import Meta from '@/components/SEO/Meta';

export default function Salang() {
  return (
    <>
      <Meta
        title="Salang Store"
        description="Портфолио Кочнева Антона, frontend-разработчика. Salang - интернет-магазин"
      />

      <Cursor />

      <Layout_P title="Salang">
        <PageItem title="Общая информация">
          <Description
            title="Salang"
            client='ООО "Кар-финанс"'
            stack="Wordpress (+ woocommerce), PHP, HTML, SCSS, JS"
            target="Разработать интернет-магазин для реализации продукции компании"
          />
        </PageItem>

        <PageItem title="Этапы разработки">
          <Steps
            items={[
              'Сбор информации: назначение, основные цели и целевая аудитория',
              'Планирование: создание карты сайта и макета',
              'Дизайн: шаблон страниц, обзор и утверждение',
              'Создание контента',
              'Верстка и разработка',
              'Подключение плагина для электронной коммерции Woocommerce',
              'Подключение платежного шлюза для оплаты',
              'Тестирование и публикация сайта на хостинг',
            ]}
          />
        </PageItem>

        <PageItem title="Результат">
          <PhotoViewer
            className="photos"
            hoverEffects={true}
            images={[
              { src: '/Portfolio/Salang/salang0.webp', alt: 'Salang 1' },
              { src: '/Portfolio/Salang/salang1.webp', alt: 'Salang 2' },
              { src: '/Portfolio/Salang/salang2.webp', alt: 'Salang 3' },
              { src: '/Portfolio/Salang/salang3.webp', alt: 'Salang 4' },
              { src: '/Portfolio/Salang/salang4.webp', alt: 'Salang 5' },
              { src: '/Portfolio/Salang/salang5.webp', alt: 'Salang 6' },
              { src: '/Portfolio/Salang/salang6.webp', alt: 'Salang 6' },
            ]}
          />
        </PageItem>
      </Layout_P>

      <Background />
    </>
  );
}
