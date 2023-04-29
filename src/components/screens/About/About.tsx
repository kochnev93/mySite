import cx from 'classnames';
import { forwardRef } from 'react';
import { aboutData } from '@/data/about/about';

//Styles
import styles from './About.module.scss';

//Components
import PageItem from '@/components/PageItem/PageItem';
import InView from '@/components/_elements/InView/InView';

type Props = {
  className?: string;
  id?: string;
  ref?: React.RefObject<HTMLDivElement>;
};

type Ref = HTMLDivElement;

const getAge = () => {
  let today = new Date();
  let birthDate = new Date(1993, 4, 18);

  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
};

const About = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div
      id={props.id}
      className={cx(styles.about, props.className)}
      data-label={'About'}
      ref={ref}
    >
      <PageItem title="Обо мне">
        <InView className={styles.about_table} activeClassName={styles.inview}>
          <table>
            <tbody>
              <tr>
                <th>Возраст:</th>
                <td>{getAge()}</td>
              </tr>
              <tr>
                <th>Адрес:</th>
                <td>{aboutData.location}</td>
              </tr>
            </tbody>
          </table>
        </InView>

        <InView className={styles.about_text} activeClassName={styles.inview}>
          Привет! Меня зовут Антон, и&nbsp;я&nbsp;frontend-разработчик. Живу
          и&nbsp;работаю в&nbsp;Санкт-Петербурге.
        </InView>

        <InView className={styles.about_text} activeClassName={styles.inview}>
          У&nbsp;меня есть опыт создания адаптивных и&nbsp;динамичных веб-сайтов
          с&nbsp;использованием современных фреймворков и&nbsp;библиотек, таких
          как React, Next.js. Также у&nbsp;меня есть опыт разработки Fullstack.
        </InView>

        <InView className={styles.about_text} activeClassName={styles.inview}>
          Я&nbsp;целеустремленный и&nbsp;внимательный к&nbsp;деталям человек,
          который всегда стремится создавать качественный код. Постоянно учусь
          и&nbsp;слежу за&nbsp;последними тенденциями и&nbsp;лучшими практиками
          frontend-разработки, и&nbsp;всегда стремлюсь осваивать новые навыки
          и&nbsp;технологии. Мне нравится работать в&nbsp;команде,
          и&nbsp;я&nbsp;всегда готов поделиться своими идеями и&nbsp;опытом для
          достижения целей проекта.
        </InView>

        <InView className={styles.about_text} activeClassName={styles.inview}>
          Сейчас я&nbsp;активно ищу новые возможности в&nbsp;качестве Frontend
          разработчика, где я&nbsp;могу продолжать оттачивать свои навыки
          и&nbsp;расширять свои знания в&nbsp;области разработки веб-приложений.
        </InView>
      </PageItem>
    </div>
  );
});

About.displayName = 'About';
export default About;
