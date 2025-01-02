import clsx from 'clsx';
import { Card } from 'konsta/react';
import { FC } from 'react';
import { NavLink } from 'react-router';
import { categoryIcons } from 'src/mocks/mock-categories';

type TProps = {
  transaction: { id: string; label: string; amount: number; category: string; type: string };
};

const TransactionItem: FC<TProps> = (props) => {
  const { transaction } = props;
  const isIncome = transaction.type === 'income';

  // Renders
  return (
    <NavLink to={`/transactions/${transaction.id}/edit`}>
      <Card className="!m-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            {categoryIcons[transaction.category as keyof typeof categoryIcons]}
            <div className="flex flex-col">
              <h2 className="text-md font-medium">{transaction.label}</h2>
              <h1 className="text-xs font-medium text-gray-500">{transaction.category}</h1>
            </div>
          </div>

          <span className={clsx('text-md font-extrabold', isIncome ? 'text-green-500' : 'text-red-500')}>
            {isIncome ? '+' : '-'}
            {transaction.amount}
          </span>
        </div>
      </Card>
    </NavLink>
  );
};

export default TransactionItem;
