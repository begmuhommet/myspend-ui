import Page from 'src/components/Page';
import AccountSummary from './components/AccountSummary';
import LatestTransactions from './components/LatestTransactions';

const DashboardScreen = () => {
  return (
    <Page back={false}>
      <AccountSummary />
      <LatestTransactions />
    </Page>
  );
};

export default DashboardScreen;
