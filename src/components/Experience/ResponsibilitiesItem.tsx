import { FC } from 'react';

type Props = {
  responsibilities: Array<string>;
  className?: string;
};

const ResponsibilitiesItem: FC<Props> = (props) => {
  return (
    <>
      {props.responsibilities.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </>
  );
};

export default ResponsibilitiesItem;
