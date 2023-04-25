import { FC } from 'react';
import styles from './Description.module.scss';
import cx from 'classnames';

type Props = {
  title: string;
  client?: string;
  stack?: string;
  target?: string;
  className?: string;
};

const Description: FC<Props> = (props) => {
  return (
    <table
      className={cx(styles.decription, props.className ? props.className : '')}
    >
      <tbody>
        <tr>
          <th>Название:</th>
          <td>{props.title}</td>
        </tr>
        <tr>
          <th>Заказчик:</th>
          <td>{props.client}</td>
        </tr>
        <tr>
          <th>Стек:</th>
          <td>{props.stack}</td>
        </tr>
        <tr>
          <th>Цель:</th>
          <td>{props.target}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Description;
