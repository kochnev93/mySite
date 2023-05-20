import { FC } from 'react';
import { educationData } from '@/data/education/education';
import InView from '@/components/_elements/InView/InView';

//Styles
import styles from './Education.module.scss';

const Education: FC = () => {
  return (
    <div>
      <ul>
        {educationData.map((item) => {
          return (
            <li className={styles.education_item} key={item.id}>
              <InView
                className={styles.inview_item}
                activeClassName={styles.inview}
              >
                <span className={styles.years}>
                  {item.yearStart}-{item.yearEnd}
                </span>
                <h4>{item.university}</h4>
                <span className={styles.faculty}>{item.faculty}</span>
                <span className={styles.specialty}>{item.specialty}</span>
              </InView>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
