import Head from 'next/head';
import Cursor from '@/components/Cursor/Cursor';
import Background from '@/components/Background/Background';
import PageItem from '@/components/PageItem/PageItem';
import Description from '@/components/_elements/Portfolio/Description/Description';
import Layout_P from '@/components/Layouts/LayoutPortfolio/Layout_P';
import Steps from '@/components/_elements/Portfolio/SteopsOfDev/Steps';
import PhotoViewer from '@/components/_elements/PhotoViewer/PhotoViewer';

export default function SmartSchool() {
  return (
    <>
      <Head>
        <title>Портфолио - Storage</title>
        <meta
          name="description"
          content="Привет, меня зовут Антон, это страница обо мне"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cursor />

      <Layout_P title="Storage">
        <PageItem title="Общая информация">
          <Description
            title="Storage"
            client='ООО "Вита"'
            stack="React (redux-toolkit, react-hooks), Express JS, MySQL"
            target='Разработать модуль для учета оборудования'
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
              'Тестирование и публикация сайта на хостинг',
              'Поддержка: отзывы пользователей',
            ]}
          />
        </PageItem>

        <PageItem title="Результат">
          <PhotoViewer
            className="photos"
            hoverEffects={true}
            images={[
              { src: '/Portfolio/Storage/storage1.webp', alt: 'Storage 1' },
              { src: '/Portfolio/Storage/storage2.webp', alt: 'Storage 2' },
              { src: '/Portfolio/Storage/storage3.webp', alt: 'Storage 3' },
              { src: '/Portfolio/Storage/storage4.webp', alt: 'Storage 4' },
              { src: '/Portfolio/Storage/storage5.webp', alt: 'Storage 5' },
              { src: '/Portfolio/Storage/storage6.webp', alt: 'Storage 6' },
              { src: '/Portfolio/Storage/storage7.webp', alt: 'Storage 7' },
              { src: '/Portfolio/Storage/storage8.webp', alt: 'Storage 8' },
              { src: '/Portfolio/Storage/storage9.webp', alt: 'Storage 9' },
            ]}
          />
        </PageItem>
      </Layout_P>

      <Background />
    </>
  );
}
