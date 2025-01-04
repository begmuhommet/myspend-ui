import { Button, Input } from '@telegram-apps/telegram-ui';
import Page from 'src/components/Page';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const AddGroupScreen = () => {
  // Renders
  return (
    <Page>
      <ScreenTitle title="Add group" />
      <Input header="Name" type="text" accept="text" placeholder="Family" style={{ background: 'transparent' }} />
      <Input header="Name alias" type="text" accept="text" placeholder="f" style={{ background: 'transparent' }} />
      <Input header="Emoji" type="text" accept="text" placeholder="🛠️" style={{ background: 'transparent' }} />
      <Input header="Budget" type="number" accept="number" placeholder="3000" style={{ background: 'transparent' }} />
      <Input header="Currency" type="text" accept="text" placeholder="USD" style={{ background: 'transparent' }} />

      <Button className="w-full">Add group</Button>
    </Page>
  );
};

export default AddGroupScreen;
