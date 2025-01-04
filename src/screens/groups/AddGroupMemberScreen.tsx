import { Button, Input } from '@telegram-apps/telegram-ui';
import Page from 'src/components/Page';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const AddGroupMemberScreen = () => {
  // Renders
  return (
    <Page>
      <ScreenTitle title="Add member" />

      <Input
        header="Telegram id"
        type="text"
        accept="text"
        placeholder="@myspend"
        style={{ background: 'transparent' }}
      />

      <Button className="w-full">Add member</Button>
    </Page>
  );
};

export default AddGroupMemberScreen;
