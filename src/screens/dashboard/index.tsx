import Page from 'src/components/Page';
import AccountSummary from './components/AccountSummary';
import LatestTransactions from './components/LatestTransactions';

const DashboardScreen = () => {
  return (
    <Page back={false}>
      <AccountSummary />
      <div className="py-2" />
      <LatestTransactions />
    </Page>
  );
};

export default DashboardScreen;
