import { Card } from 'konsta/react';
import { FC } from 'react';
import { NavLink } from 'react-router';
import { categoryIcons } from 'src/mocks/mock-categories';

type TProps = {
  transaction: { label: string; amount: number; category: string };
};

const TransactionItem: FC<TProps> = (props) => {
  const { transaction } = props;

  // Renders
  return (
    <NavLink to={`/transactions/${transaction.label}/edit`}>
      <Card className="!m-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            {categoryIcons[transaction.category as keyof typeof categoryIcons]}
            <div className="flex flex-col">
              <h2 className="text-md font-light">{transaction.label}</h2>
              <h1 className="text-xs font-medium text-gray-500">{transaction.category}</h1>
            </div>
          </div>

          <span className="text-md font-extrabold">{transaction.amount}</span>
        </div>
      </Card>
    </NavLink>
  );
};

export default TransactionItem;
