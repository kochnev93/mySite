import cx from 'classnames';
import { useInView } from 'react-intersection-observer';

//Styles
import styles from './About.module.scss';

//Components
import Skills from '@/components/Skills/Skills';
import PageItem from '@/components/PageItem/PageItem';


type Props = {
  className?: string;
  id?: string;
};

const About: React.FC<Props> = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  
  return (
  <div id={props.id} className={cx(styles.about, props.className, {['view']: inView})} data-label={'About'} ref={ref}>

    <PageItem title='Обо мне' className={cx({[styles.view]: inView})}>
      <p>
        Добрый день! Я Frontend разработчик, занимаюсь фронтенд разработкой более 3-х лет. Живу в Санкт-Петербурге.
      </p>
    </PageItem>


    {/* <PageItem title='Ключевые навыки' className={cx({[styles.view]: inView})}>
      <Skills/>
    </PageItem> */}

  </div>
)};

export default About;
