import { Card } from '@telegram-apps/telegram-ui';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type TProps = PropsWithChildren<{ className?: string }>;

const AppCard = (props: TProps) => {
  const { children, className } = props;

  return (
    <Card className={clsx('p-4', className)} style={{ background: `var(--tgui--secondary_bg_color)` }}>
      {children}
    </Card>
  );
};

export default AppCard;
