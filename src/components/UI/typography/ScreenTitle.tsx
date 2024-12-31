import clsx from 'clsx';
import { FC } from 'react';

type TProps = {
  title: string;
  className?: string;
};

const ScreenTitle: FC<TProps> = (props) => {
  const { title, className } = props;

  return <h1 className={clsx('text-xl font-light', className)}>{title}</h1>;
};

export default ScreenTitle;
