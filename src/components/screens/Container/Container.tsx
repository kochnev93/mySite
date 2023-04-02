import Header from '@/components/Header/Header';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Contaier = ({ children }: Props) => {
  return (
    <div className="layoat">
      <div className="container">
        {children}
        </div>
    </div>
  );
};

export default Contaier;
