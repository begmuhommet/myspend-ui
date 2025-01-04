import { Input, type InputProps } from '@telegram-apps/telegram-ui';
import { FC } from 'react';
import AppInputLabel from './AppInputLabel';

interface IProps extends InputProps {
  label: string;
  isRequired?: boolean;
}

const AppInput: FC<IProps> = (props) => {
  const { label, isRequired = false, ...rest } = props;

  return (
    <Input {...rest} header={<AppInputLabel label={label} isRequired={isRequired} />} className="bg-transparent" />
  );
};

export default AppInput;
