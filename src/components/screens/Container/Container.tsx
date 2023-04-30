import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Contaier = ({ children }: Props) => {
  return (

    <div className="container">
      {children}
      </div>

  );
};

export default Contaier;
