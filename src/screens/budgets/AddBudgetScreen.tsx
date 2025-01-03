import { Button, Input } from '@telegram-apps/telegram-ui';
import Page from 'src/components/Page';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const AddBudgetScreen = () => {
  // Renders
  return (
    <Page>
      <ScreenTitle title="Add budget" />

      <Input header="Amount" type="number" accept="number" placeholder="3200" style={{ background: 'transparent' }} />
      <Input header="Start date" type="date" accept="date" placeholder="3200" style={{ background: 'transparent' }} />
      <Input header="End date" type="date" accept="date" placeholder="3200" style={{ background: 'transparent' }} />

      <Button className="w-full">Add budget</Button>
    </Page>
  );
};

export default AddBudgetScreen;
