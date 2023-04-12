import { FC } from 'react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode,
    title: string,
    className?: string
  };

const PageItem: FC<Props> = (props) => {
  return (
    <div className={`page_item ${props.className ? props.className : '' }`.trim()}>

        <div className="page_title">
          <h2>{props.title}</h2>
        </div>

        <div className={`page_content ${props.className ? props.className : ''}`.trim()}>
            {props.children}
        </div>
    </div>
  );
};

export default PageItem;
