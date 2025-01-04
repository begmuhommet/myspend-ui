import { Caption, Headline } from '@telegram-apps/telegram-ui';
import { FC } from 'react';
import { IoCalculatorOutline } from 'react-icons/io5';
import AppCard from 'src/components/UI/AppCard';

type TProps = {
  budget: {
    id: number;
    amount: number;
    startDate: Date;
    endDate: Date;
  };
};

const BudgetItem: FC<TProps> = (props) => {
  const { budget } = props;

  return (
    <AppCard className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <IoCalculatorOutline className="w-5 h-5" />
        <Headline weight="3">{budget.amount}</Headline>
      </div>
      <Caption weight="3" className="text-hint">
        {budget.startDate.toLocaleDateString()}
      </Caption>
      <Caption weight="3" className="text-hint">
        {budget.startDate.toLocaleDateString()}
      </Caption>
    </AppCard>
  );
};

export default BudgetItem;
