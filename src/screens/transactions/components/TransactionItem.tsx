import { Caption, Text } from '@telegram-apps/telegram-ui';
import clsx from 'clsx';
import { FC } from 'react';
import { NavLink } from 'react-router';
import AppCard from 'src/components/UI/AppCard';
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
      <AppCard className="w-full flex items-center justify-between p-4 box-border">
        <div className="flex items-center justify-between gap-3">
          {categoryIcons[transaction.category as keyof typeof categoryIcons]}
          <div className="flex flex-col">
            <Text weight="3">{transaction.label}</Text>
            <Caption level="1" weight="3" className="text-hint">
              {transaction.category}
            </Caption>
          </div>
        </div>

        <Text weight="1" className={clsx(isIncome ? 'text-green-500' : 'text-red-500')}>
          {isIncome ? '+' : '-'}
          {transaction.amount}
        </Text>
      </AppCard>
    </NavLink>
  );
};

export default TransactionItem;
