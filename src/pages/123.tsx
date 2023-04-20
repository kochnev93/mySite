import Head from 'next/head';
import Cursor from '@/components/Cursor/Cursor';
import Contaier from '@/components/screens/Container/Container';
import Footer from '@/components/Footer/Footer';
import Background from '@/components/Background/Background';
import Link from 'next/link';
import PageItem from '@/components/PageItem/PageItem';
import Image from 'next/image';
import SimpleSlider from '@/components/Slider/Slider';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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

      <div className="wrapper">
        <header className="portfolio_header">
          <Link href={'/#portfolio'}>&#8249; Назад </Link>
          <h1>Smart School</h1>
        </header>

        <main className="portfolio_main">
          <section>
            {/* <PageItem title="Результат">
              <div className="slider_container">
                <div className="slider_items">
                  <SimpleSlider />
                </div>
              </div>
            </PageItem> */}



            <PageItem title="Общая информация">
              <table>
                <tr>
                  <th>Название:</th>
                  <td>Smart School</td>
                </tr>
                <tr>
                  <th>Заказчик:</th>
                  <td>ООО "Кар-финанс"</td>
                </tr>
                <tr>
                  <th>Стек:</th>
                  <td>Wordpress (+ carbon fields), PHP, HTML, SCSS, JS</td>
                </tr>
                <tr>
                  <th>Цель:</th>
                  <td>
                    Разработать сайт для центра об­ра­зо­ва­тель­ных услуг
                    "Smart School", с целью привлечения новых клиентов
                  </td>
                </tr>
              </table>
            </PageItem>

            <PageItem title="Этапы разработки">
              <ol className="portfolio_steps">
                <li>
                  Сбор информации: назначение, основные цели и целевая аудитория
                </li>
                <li>Планирование: создание карты сайта и макета</li>
                <li>Дизайн: шаблон страниц, обзор и утверждение</li>
                <li>Создание контента</li>
                <li>Верстка и разработка</li>
                <li>Тестирование и деплой</li>
                <li>Поддержка: отзывы пользователей</li>
              </ol>
            </PageItem>

            <PageItem title="Результат">
              <div className="photos">
                <PhotoProvider>
                  <PhotoView src="/Portfolio/smart1.webp">
                    <img className='img_zoom' src="/Portfolio/smart1.webp" alt="" />
                  </PhotoView>
                  <PhotoView src="/Portfolio/smart2.webp">
                    <img className='img_zoom' src="/Portfolio/smart2.webp" alt="" />
                  </PhotoView>
                  <PhotoView src="/Portfolio/smart3.webp">
                    <img className='img_zoom' src="/Portfolio/smart3.webp" alt="" />
                  </PhotoView>
                  <PhotoView src="/Portfolio/smart4.webp">
                    <img className='img_zoom' src="/Portfolio/smart4.webp" alt="" />
                  </PhotoView>
                  <PhotoView src="/Portfolio/smart5.webp">
                    <img className='img_zoom' src="/Portfolio/smart5.webp" alt="" />
                  </PhotoView>

                  <PhotoView src="/Portfolio/smart6.webp">
                    <img className='img_zoom' src="/Portfolio/smart6.webp" alt="" />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </PageItem>
          </section>
        </main>
      </div>

      <Footer />

      <Background />
    </>
  );
}
