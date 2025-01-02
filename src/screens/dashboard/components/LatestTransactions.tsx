import SectionTitle from 'src/components/UI/typography/SectionTitle';
import { mockTransactions } from 'src/mocks/mock-transactions';
import TransactionItem from 'src/screens/transactions/components/TransactionItem';

const LatestTransactions = () => {
  // Renders
  const renderLatestTransactions = () => {
    return mockTransactions.map((transaction) => <TransactionItem key={transaction.label} transaction={transaction} />);
  };

  return (
    <>
      <div className="m-4">
        <SectionTitle title="Latest transactions" />
      </div>

      <div className="flex flex-col gap-3 m-4">{renderLatestTransactions()}</div>
    </>
  );
};

export default LatestTransactions;
