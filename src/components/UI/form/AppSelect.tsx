import { Select, SelectProps } from '@telegram-apps/telegram-ui';
import { FC } from 'react';
import AppInputLabel from './AppInputLabel';

interface IProps extends Omit<SelectProps, 'children'> {
  label: string;
  isRequired?: boolean;
  options: { label: string; value: string; emoji?: string }[];
}

const AppSelect: FC<IProps> = (props) => {
  const { label, isRequired = false, options, ...rest } = props;

  const renderOptions = () => {
    return options?.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <Select {...rest} header={<AppInputLabel label={label} isRequired={isRequired} />} className="bg-transparent">
      {renderOptions()}
    </Select>
  );
};

export default AppSelect;
