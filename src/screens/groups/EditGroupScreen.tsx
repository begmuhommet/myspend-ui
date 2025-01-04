import { Button, Input } from '@telegram-apps/telegram-ui';
import Page from 'src/components/Page';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const EditGroupScreen = () => {
  // Renders
  return (
    <Page>
      <ScreenTitle title="Edit group" />

      <Input header="Name" type="text" accept="text" placeholder="Grocery" style={{ background: 'transparent' }} />
      <Input
        header="Name alias"
        type="text"
        accept="text"
        placeholder="Grocery"
        style={{ background: 'transparent' }}
      />
      <Input header="Emoji" type="text" accept="text" placeholder="🪖" style={{ background: 'transparent' }} />
      <Input header="Budget" type="number" accept="number" placeholder="3400" style={{ background: 'transparent' }} />
      <Input header="Currency" type="number" accept="number" placeholder="3000" style={{ background: 'transparent' }} />
      <Button className="w-full">Save</Button>
    </Page>
  );
};

export default EditGroupScreen;
