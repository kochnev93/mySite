import { FC } from 'react';
import styles from './Steps.module.scss';
import cx from 'classnames';

type Props = {
  items: Array<string>;
  className?: string;
};

const Steps: FC<Props> = (props) => {
  return (
    <>
      <ol className={cx(styles.steps, props.className ? props.className : '')}>
        {props.items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </>
  );
};

export default Steps;
