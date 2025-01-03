import Page from 'src/components/Page';
import AccountSummary from './components/AccountSummary';
import LatestTransactions from './components/LatestTransactions';

const DashboardScreen = () => {
  return (
    <Page>
      <AccountSummary />
      <LatestTransactions />
    </Page>
  );
};

export default DashboardScreen;
