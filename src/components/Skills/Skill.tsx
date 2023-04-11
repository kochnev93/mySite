import { FC } from 'react';
import { ReactNode } from 'react';

//Styles
import styles from './Skills.module.scss';

type Props = {
    children: ReactNode,
    title: string,
    subtitle?: string,
  };

const Skill: FC<Props> = (props) => {
  return (
    <li className={styles.skill}>
      {props.children}
      <h4>{props.title}</h4>
      <span>
        {props.subtitle ? props.subtitle : <>&nbsp;</>}
      </span>
    </li>
  );
};

export default Skill;
