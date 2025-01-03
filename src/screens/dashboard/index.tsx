import { Section } from '@telegram-apps/telegram-ui';
import Page from 'src/components/Page';
import AccountSummary from './components/AccountSummary';
import LatestTransactions from './components/LatestTransactions';

const DashboardScreen = () => {
  return (
    <Page back={false}>
      <Section>
        <AccountSummary />
        <LatestTransactions />
      </Section>
    </Page>
  );
};

export default DashboardScreen;
