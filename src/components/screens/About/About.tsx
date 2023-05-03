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
          Привет! Я&nbsp;Антон, frontend-разработчик из&nbsp;Санкт-Петербурга.
        </InView>

        <InView className={styles.about_text} activeClassName={styles.inview}>
          Мой профессиональный опыт включает создание адаптивных
          и&nbsp;динамичных веб-сайтов с&nbsp;использованием современных
          фреймворков и&nbsp;библиотек, таких как React, Next.js и&nbsp;Express
          JS. Кроме того, я&nbsp;имею опыт Fullstack разработки.
        </InView>

        <InView className={styles.about_text} activeClassName={styles.inview}>
          Я&nbsp;являюсь целеустремленным и&nbsp;внимательным к&nbsp;деталям
          специалистом, который всегда стремится создавать качественный код.
          Постоянно обучаюсь и&nbsp;следую за&nbsp;последними тенденциями
          в&nbsp;области frontend-разработки. Я&nbsp;готов осваивать новые
          навыки и&nbsp;технологии, чтобы оставаться в&nbsp;тренде.
        </InView>

        <InView className={styles.about_text} activeClassName={styles.inview}>
          Мне нравится работать в&nbsp;команде, где мы&nbsp;можем обмениваться
          идеями и&nbsp;опытом для достижения общих целей проекта. Я&nbsp;готов
          делиться своими знаниями и&nbsp;помогать коллегам в&nbsp;решении
          сложных задач.
        </InView>

        <InView className={styles.about_text} activeClassName={styles.inview}>
          Сейчас я&nbsp;ищу новые возможности для развития в&nbsp;качестве
          Frontend разработчика. Я&nbsp;уверен, что мой опыт и&nbsp;умения
          помогут мне стать ценным членом любой команды разработчиков
          веб-приложений.
        </InView>
      </PageItem>
    </div>
  );
});

About.displayName = 'About';
export default About;
