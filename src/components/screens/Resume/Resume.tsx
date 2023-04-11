import cx from 'classnames';
import styles from './Resume.module.scss';
import Experience from '@/components/Experience/Experience';

type Props = {
  className?: string;
  id?: string;
};

const Resume: React.FC<Props> = (props) => (
  <div id={props.id} className={cx(styles.resume, props.className)} data-label={'Resume'}>
    <div className="page_title">
      <h2>Резюме</h2>
    </div>

    <div className="page_content">
      <p>
        Здесь будет резюме...
      </p>

      <Experience/>
    </div>
  </div>
);

export default Resume;
