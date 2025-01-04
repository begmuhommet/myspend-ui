import { Button } from '@telegram-apps/telegram-ui';
import Page from 'src/components/Page';
import AppInput from 'src/components/UI/form/AppInput';
import AppSelect from 'src/components/UI/form/AppSelect';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const budgetOptions = [
  { label: '1000', value: '1000' },
  { label: '2000', value: '2000' },
  { label: '3000', value: '3000' },
];

const AddCategoryScreen = () => {
  // Renders
  return (
    <Page>
      <ScreenTitle title="Add category" />

      <form className="py-2">
        <AppInput label="Name" isRequired header="Name" type="text" placeholder="Grocery" />
        <AppInput label="Emoji" isRequired header="Emoji" type="text" placeholder="🍎" />
        <AppSelect label="Budget" options={budgetOptions} />

        <div className="px-5 py-5">
          <Button className="w-full">Add category</Button>
        </div>
      </form>
    </Page>
  );
};

export default AddCategoryScreen;
