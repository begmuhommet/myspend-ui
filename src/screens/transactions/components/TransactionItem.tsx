import { Card } from 'konsta/react';
import { FC } from 'react';

import CategoryIcon from 'src/screens/categories/components/CategoryIcon';

type TProps = {
  spend: { label: string; amount: number; category: string };
};

const TransactionItem: FC<TProps> = (props) => {
  const { spend } = props;

  // Renders
  return (
    <Card className="!m-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <CategoryIcon category={spend.category} />
          <div className="flex flex-col">
            <h2 className="text-md font-light">{spend.label}</h2>
            <h1 className="text-xs font-medium text-gray-400">{spend.category}</h1>
          </div>
        </div>

        <span className="text-md font-extrabold">{spend.amount}</span>
      </div>
    </Card>
  );
};

export default TransactionItem;
