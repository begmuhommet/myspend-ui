import { Headline } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type TProps = {
  title: string;
  className?: string;
};

const SectionTitle: FC<TProps> = (props) => {
  const { title } = props;

  return <Headline weight="3">{title}</Headline>;
};

export default SectionTitle;
