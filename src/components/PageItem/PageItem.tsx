import { FC } from 'react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
};

const PageItem: FC<Props> = (props) => {
  return (
    <div
      className={`page_item ${props.className ? props.className : ''}`.trim()}
    >
      <h2 className="page_title">{props.title}</h2>

      <div className="page_content">{props.children}</div>
    </div>
  );
};

export default PageItem;
