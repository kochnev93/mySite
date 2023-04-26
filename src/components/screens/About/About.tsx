import cx from 'classnames';
import { useInView } from 'react-intersection-observer';

//Styles
import styles from './About.module.scss';

//Components
import PageItem from '@/components/PageItem/PageItem';

type Props = {
  className?: string;
  id?: string;
  ref?: React.RefObject<HTMLDivElement>
};

const getAge = () => {
  let today = new Date();
  let birthDate = new Date(1993, 4, 18);

  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  
  return age;
}



const About: React.FC<Props> = (props) => {

  return (
    <div
      id={props.id}
      className={cx(styles.about, props.className)}
      data-label={'About'}
      ref={props.ref}
    >
      <PageItem title="Обо мне" >
        <table>
          <tbody>
            <tr>
              <th>Возраст:</th>
              <td>{getAge()}</td>
            </tr>
            <tr>
              <th>Адрес:</th>
              <td>Россия, Санкт-Петербург</td>
            </tr>
          </tbody>
        </table>
        <p>
          Привет! Меня зовут Антон, и&nbsp;я&nbsp;frontend-разработчик. Живу
          и&nbsp;работаю в&nbsp;Санкт-Петербурге.
        </p>

        <p>
          У&nbsp;меня есть опыт создания адаптивных и&nbsp;динамичных веб-сайтов
          с&nbsp;использованием современных фреймворков и&nbsp;библиотек, таких
          как React, Next.js. Также у&nbsp;меня есть опыт разработки Fullstack.
        </p>

        <p>
          Я&nbsp;целеустремленный и&nbsp;внимательный к&nbsp;деталям человек,
          который всегда стремится создавать качественный код.
          Постоянно учусь и&nbsp;слежу за&nbsp;последними тенденциями
          и&nbsp;лучшими практиками frontend-разработки, и&nbsp;всегда
          стремлюсь осваивать новые навыки и&nbsp;технологии. Мне нравится
          работать в&nbsp;команде, и&nbsp;я&nbsp;всегда готов поделиться своими
          идеями и&nbsp;опытом для достижения целей проекта.
        </p>

        <p>
          Сейчас я&nbsp;активно ищу новые возможности в&nbsp;качестве Frontend
          разработчика, где я&nbsp;могу продолжать оттачивать свои навыки
          и&nbsp;расширять свои знания в&nbsp;области разработки веб-приложений.
        </p>
      </PageItem>
    </div>
  );
};

export default About;
