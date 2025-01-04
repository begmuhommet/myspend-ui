import { Button, Input } from '@telegram-apps/telegram-ui';
import Page from 'src/components/Page';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const EditCategoryScreen = () => {
  // Renders
  return (
    <Page>
      <ScreenTitle title="Edit category" />

      <Input header="Name" type="text" placeholder="Grocery" style={{ background: 'transparent' }} />
      <Input header="Emoji" type="text" placeholder="🍛" style={{ background: 'transparent' }} />
      <Input header="Budget" type="number" placeholder="3000" style={{ background: 'transparent' }} />

      <Button className="w-full">Save</Button>
    </Page>
  );
};

export default EditCategoryScreen;
