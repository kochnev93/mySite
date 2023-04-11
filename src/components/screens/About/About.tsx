import cx from 'classnames';

//Styles
import styles from './About.module.scss';

//Components
import Skills from '@/components/Skills/Skills';
import PageItem from '@/components/PageItem/PageItem';


type Props = {
  className?: string;
  id?: string;
};

const About: React.FC<Props> = (props) => (
  <div id={props.id} className={cx(styles.about, props.className)} data-label={'About'}>

    <PageItem title='Обо мне'>
      <p>
        Привет! Меня зовут Антон и я Front-end разработчик из Санкт-Петербурга.
      </p>
    </PageItem>


    <PageItem title='Ключевые навыки'>
      <Skills/>
    </PageItem>

  </div>
);

export default About;
