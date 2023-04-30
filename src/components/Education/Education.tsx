import { FC } from 'react';
import { ReactNode } from 'react';
import cx from 'classnames';
import { educationData } from '@/data/education/education';

//Styles
import styles from './Education.module.scss';

const Education: FC = () => {
  return (
    <div>
      {/* <h4 className={styles.resume_title}>Образование</h4> */}
      <ul>
        {educationData.map((item) => {
          return (
            <li className={styles.education_item} key={item.id}>
              <span className={styles.years}>
                {item.yearStart}-{item.yearEnd}
              </span>
              <h4>{item.university}</h4>
              <span className={styles.faculty}>{item.faculty}</span>
              <span className={styles.specialty}>{item.specialty}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
