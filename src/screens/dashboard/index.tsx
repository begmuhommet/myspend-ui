import { Block, Card, Icon } from 'konsta/react';
import { GiTwoCoins } from 'react-icons/gi';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import SectionTitle from 'src/components/UI/typography/SectionTitle';
import TransactionItem from 'src/screens/transactions/components/TransactionItem';

const latestSpends = [
  { label: 'Washed car', amount: 123000.0, category: 'Cars' },
  { label: 'Grocery shopping', amount: 200000.0, category: 'Food' },
  { label: 'Electricity bill', amount: 150000.0, category: 'Utilities' },
  { label: 'Gym membership', amount: 50000.0, category: 'Health' },
  { label: 'Movie tickets', amount: 30000.0, category: 'Entertainment' },
  { label: 'Coffee', amount: 5000.0, category: 'Beverages' },
];

const DashboardScreen = () => {
  // Renders
  const renderLatestTransactions = () => {
    return latestSpends.map((spend) => <TransactionItem key={spend.label} spend={spend} />);
  };

  return (
    <div className="mb-24">
      <Block>
        <ScreenTitle title="Dashboard" />
      </Block>

      <Card className="relative">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-light">Total Balance</h2>
            <h1 className="text-2xl font-extrabold">1000</h1>
          </div>

          <Icon
            className="absolute right-0 top-auto bottom-auto"
            ios={<GiTwoCoins className="w-36 h-36 text-gray-400" />}
            material={<GiTwoCoins className="w-36 h-36 text-gray-400" />}
          />
        </div>
      </Card>

      <div className="flex items-center justify-between gap-2 m-4 mb-8">
        <Card className="w-full flex-1 !m-0 relative">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-light">Income</h2>
            <h1 className="text-xl font-extrabold text-green-500">2,400,00</h1>
          </div>
          <Icon
            className="absolute right-2 top-2"
            ios={<IoArrowDown className="w-4 h-4 text-green-500" />}
            material={<IoArrowDown className="w-4 h-4 text-green-500" />}
          />
        </Card>
        <Card className="w-full flex-1 !m-0 relative">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-light">Spent</h2>
            <h1 className="text-xl font-extrabold text-red-500">1,200,00</h1>
          </div>
          <Icon
            className="absolute right-2 top-2"
            ios={<IoArrowUp className="w-4 h-4 text-red-500" />}
            material={<IoArrowUp className="w-4 h-4 text-red-500" />}
          />
        </Card>
      </div>

      <div className="m-4">
        <SectionTitle title="Latest transactions" />
      </div>

      <div className="flex flex-col gap-3 m-4">{renderLatestTransactions()}</div>
    </div>
  );
};

export default DashboardScreen;
