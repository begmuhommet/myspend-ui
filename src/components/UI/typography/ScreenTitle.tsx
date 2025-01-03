import { Title } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type TProps = {
  title: string;
};

const ScreenTitle: FC<TProps> = (props) => {
  const { title } = props;

  return (
    <Title weight="2" plain>
      {title}
    </Title>
  );
};

export default ScreenTitle;
