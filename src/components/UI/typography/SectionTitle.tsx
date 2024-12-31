import clsx from 'clsx';
import { FC } from 'react';

type TProps = {
  title: string;
  className?: string;
};

const SectionTitle: FC<TProps> = (props) => {
  const { title, className } = props;

  return <h1 className={clsx('text-lg font-light', className)}>{title}</h1>;
};

export default SectionTitle;
