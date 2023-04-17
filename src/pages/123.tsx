import Head from 'next/head';
import Cursor from '@/components/Cursor/Cursor';
import Contaier from '@/components/screens/Container/Container';
import Footer from '@/components/Footer/Footer';
import Background from '@/components/Background/Background';
import Link from 'next/link';
import PageItem from '@/components/PageItem/PageItem';
import Image from 'next/image';
import SimpleSlider from '@/components/Slider/Slider';

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
            <PageItem title="Общая информация">
              <ul className="portfolio_description">
                <li>
                  <h4>Название:</h4>
                  <span>Smart School</span>
                </li>

                <li>
                  <h4>Заказчик:</h4>
                  <span>ООО "Кар-финанс" (2722133934)</span>
                </li>

                <li>
                  <h4>Стек:</h4>
                  <span>Wordpress, HTML, SCSS, JS</span>
                </li>

                <li>
                  <h4>Цель:</h4>
                  <span>
                    Разработать сайт для центра об­ра­зо­ва­тель­ных услуг
                    "Smart School"{' '}
                  </span>
                </li>
              </ul>
            </PageItem>

            <PageItem title="Результат">
              <div style={{padding: '0 100px'}}>
              <SimpleSlider />
              </div>

            </PageItem>


            <PageItem title="Общая информация">
              <ul className="portfolio_description">
                <li>
                  <h4>Название:</h4>
                  <span>Smart School</span>
                </li>

                <li>
                  <h4>Заказчик:</h4>
                  <span>ООО "Кар-финанс" (2722133934)</span>
                </li>

                <li>
                  <h4>Стек:</h4>
                  <span>Wordpress, HTML, SCSS, JS</span>
                </li>

                <li>
                  <h4>Цель:</h4>
                  <span>
                    Разработать сайт для центра об­ра­зо­ва­тель­ных услуг
                    "Smart School"{' '}
                  </span>
                </li>
              </ul>
            </PageItem>
          </section>
        </main>
      </div>

      <Footer />

      <Background />
    </>
  );
}
