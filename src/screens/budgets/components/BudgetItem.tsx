import { Card, Icon } from 'konsta/react';
import { FC } from 'react';
import { IoCalculatorOutline } from 'react-icons/io5';

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
    <Card className="!m-0">
      <div className="flex items-center justify-between">
        <Icon
          ios={<IoCalculatorOutline className="w-5 h-5" />}
          material={<IoCalculatorOutline className="w-5 h-5" />}
        />

        <div>
          <h2 className="text-md font-medium">{budget.amount}</h2>
          <span className="text-sm text-gray-500">{budget.startDate.toLocaleDateString()}</span>
          <span className="text-sm text-gray-500">{budget.startDate.toLocaleDateString()}</span>
        </div>
      </div>
    </Card>
  );
};

export default BudgetItem;