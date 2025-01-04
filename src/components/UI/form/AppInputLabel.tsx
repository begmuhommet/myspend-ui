import { Subheadline } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type IProps = {
  label: string;
  isRequired?: boolean;
};

const AppInputLabel: FC<IProps> = (props) => {
  const { label, isRequired = false } = props;

  return (
    <Subheadline className="text-theme flex gap-1 opacity-95">
      {label}
      {isRequired && <span className="text-red-500">*</span>}
    </Subheadline>
  );
};

export default AppInputLabel;
