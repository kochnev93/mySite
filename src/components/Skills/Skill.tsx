import { FC, useRef, ReactNode } from 'react';
import { useInView } from 'framer-motion';
import cx from 'classnames';

//Styles
import styles from './Skills.module.scss';

type Props = {
  children: ReactNode;
  title: string;
  subtitle?: string;
};

const Skill: FC<Props> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <li className={cx(styles.skill, { [styles.inview]: isInView })} ref={ref}>
      {props.children}
      <h4>{props.title}</h4>
      <span>{props.subtitle ? props.subtitle : <>&nbsp;</>}</span>
    </li>
  );
};

export default Skill;
