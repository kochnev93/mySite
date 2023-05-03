import { FC, PropsWithChildren, ReactNode, useRef } from 'react';
import { useInView } from 'framer-motion';
import cx from 'classnames';

interface IView {
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

const InView: FC<PropsWithChildren<IView>> = ({ children, className, activeClassName }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={cx({
        [`${className}`]: className,
        [`${activeClassName}`]: isInView,
      })}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default InView;
