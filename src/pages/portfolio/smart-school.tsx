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
        <title>Портфолио - Smart School</title>
        <meta
          name="description"
          content="Привет, меня зовут Антон, это страница обо мне"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cursor />

      <Layout_P title="Smart School">
        <PageItem title="Общая информация">
          <Description
            title="Smart School"
            client='ООО "Кар-финанс"'
            stack="Wordpress (+ carbon fields), PHP, HTML, SCSS, JS"
            target='Разработать сайт для центра об­ра­зо­ва­тель­ных услуг "Smart
                  School", с целью привлечения новых клиентов'
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
              { src: '/Portfolio/SmartSchool/smart1.webp', alt: 'Smart School 1' },
              { src: '/Portfolio/SmartSchool/smart2.webp', alt: 'Smart School 2' },
              { src: '/Portfolio/SmartSchool/smart3.webp', alt: 'Smart School 3' },
              { src: '/Portfolio/SmartSchool/smart4.webp', alt: 'Smart School 4' },
              { src: '/Portfolio/SmartSchool/smart5.webp', alt: 'Smart School 5' },
              { src: '/Portfolio/SmartSchool/smart6.webp', alt: 'Smart School 6' },
            ]}
          />
        </PageItem>
      </Layout_P>

      <Background />
    </>
  );
}
