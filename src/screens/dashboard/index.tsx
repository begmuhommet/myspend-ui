import { List } from '@telegram-apps/telegram-ui';
import Page from 'src/components/Page';
import AccountSummary from './components/AccountSummary';
import LatestTransactions from './components/LatestTransactions';

const DashboardScreen = () => {
  return (
    <Page back={false}>
      <List style={{ background: 'var(--tgui--secondary_bg_color)' }}>
        <AccountSummary />
        <LatestTransactions />
      </List>
    </Page>
  );
};

export default DashboardScreen;
