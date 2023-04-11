import cx from 'classnames';
import styles from './Resume.module.scss';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import PageItem from '@/components/PageItem/PageItem';
import Skills from '@/components/Skills/Skills';

//Icons
import { MdWorkOutline } from 'react-icons/Md';
import { MdSchool } from 'react-icons/Md';

type Props = {
  className?: string;
  id?: string;
};

const Resume: React.FC<Props> = (props) => (
  <div
    id={props.id}
    className={cx(styles.resume, props.className)}
    data-label={'Resume'}
  >
    <PageItem title="Резюме" className={styles.resume_block}>
      <div>
        <div className={styles.resume_title}>
          <MdWorkOutline />
          <h3>Опыт работы</h3>
        </div>
        <Experience />
      </div>

      <div>
        <div className={styles.resume_title}>
          <MdSchool />
          <h3>Образование</h3>
        </div>
        <Education />
      </div>
    </PageItem>

    <PageItem title="Ключевые навыки">
      <Skills />
    </PageItem>
  </div>
);

export default Resume;
