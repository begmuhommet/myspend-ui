import { backButton } from '@telegram-apps/sdk-react';
import { List } from '@telegram-apps/telegram-ui';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router';

type TProps = PropsWithChildren<{ back?: boolean }>;

const Page: FC<TProps> = (props) => {
  const { children, back = true } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (!back) {
      backButton.hide();
      return;
    }

    backButton.show();
    return backButton.onClick(() => {
      navigate(-1);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [back]);

  return (
    <List style={{ background: 'var(--tgui--bg_color)', minHeight: '100vh', padding: `8px 8px 48px 8px` }}>
      {children}
    </List>
  );
};

export default Page;
