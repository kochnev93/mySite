import cx from 'classnames';
import styles from './About.module.scss';

//Icons
import { FaReact } from 'react-icons/Fa';
import { SiNextdotjs } from 'react-icons/Si';
import {TbBrandJavascript} from 'react-icons/Tb'
import {TbBrandTypescript} from 'react-icons/Tb'

type Props = {
  className?: string;
  id?: string;
};

const About: React.FC<Props> = (props) => (
  <div id={props.id} className={cx(styles.about, props.className)}>
    <div className="page_title">
      <h2>Обо мне</h2>
    </div>

    <div className="page_content">
      <p>
        Привет! Меня зовут Антон и я Front-end разработчик из Санкт-Петербурга.
      </p>

      <ul>
        <li>
          <span>Возраст</span>
        </li>
      </ul>
    </div>

    <div className="page_title">
      <h2>Стек</h2>
    </div>

    <div className="page_content">
      <ul className={cx(styles.stack_list, styles.show)}>
        <li>
          <FaReact />
          <h4>React JS</h4>
          <span>
            React Hooks, Redux-toolkit
          </span>
        </li>

        <li>
          <SiNextdotjs />
          <h4>Next JS</h4>
          <span>
            Sed eleifend sed 
          </span>
        </li>

        <li>
          <TbBrandJavascript />
          <h4>JavaScript</h4>
          <span>
            ES5, ES6, Promise
          </span>
        </li>

        <li>
          <TbBrandTypescript />
          <h4>TypeScript</h4>
          <span>
            Sed eleifend sed 
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default About;
