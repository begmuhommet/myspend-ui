import AccountSummary from './components/AccountSummary';
import LatestTransactions from './components/LatestTransactions';

const DashboardScreen = () => {
  return (
    <div className="mb-24">
      <AccountSummary />
      <LatestTransactions />
    </div>
  );
};

export default DashboardScreen;
