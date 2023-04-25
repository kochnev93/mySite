import { FC } from 'react';
import { ReactNode } from 'react';
import cx from 'classnames';
import styles from './PageItem.module.scss';

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
};

const PageItem: FC<Props> = (props) => {
  return (
    <section className={cx(styles.item, props.className ? props.className : '')}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.content}>{props.children}</div>
    </section>
  );
};

export default PageItem;
