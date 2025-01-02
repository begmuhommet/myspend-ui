import clsx from 'clsx';
import { Block } from 'konsta/react';
import { FC } from 'react';

type TProps = {
  children: React.ReactNode;
  className?: string;
};

const ScreenHeader: FC<TProps> = (props) => {
  const { children, className } = props;

  return <Block className={clsx('mt-4 mb-6', className)}>{children}</Block>;
};

export default ScreenHeader;
