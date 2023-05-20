import { FC } from 'react';
import { experienceData } from '@/data/experience/experience';
import cx from 'classnames';
import InView from '@/components/_elements/InView/InView';

//Styles
import styles from './Experience.module.scss';

//Components
import ResponsibilitiesItem from './ResponsibilitiesItem';

const Experience: FC = () => {
  return (
    <ul className={styles.experience}>
      {experienceData.map((item) => {
        return (
          <li className={styles.experience_item} key={item.id}>
            <InView
              className={styles.inview_item}
              activeClassName={styles.inview}
            >
              <span
                className={cx(styles.years, {
                  [styles.present]: item.presentTime,
                })}
              >
                {item.yearStart} - {item.presentTime ? 'н.в' : item.yearEnd}
              </span>
              <h4>{item.position}</h4>
              <span className={styles.company}>{item.company}</span>
              <ul className={styles.responsibilities}>
                <ResponsibilitiesItem
                  responsibilities={item.responsibilities}
                />
              </ul>
            </InView>
          </li>
        );
      })}
    </ul>
  );
};

export default Experience;
