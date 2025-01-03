import { Button, Input, Select } from '@telegram-apps/telegram-ui';
import Page from 'src/components/Page';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockCategories } from 'src/mocks/mock-categories';
import { mockGroups } from 'src/mocks/mock-groups';

const EditTransactionScreen = () => {
  // Renders
  const renderGroups = () => {
    return mockGroups.map((item) => (
      <option value={item.id}>
        {item.icon} {item.name}
      </option>
    ));
  };

  const renderCategories = () => {
    return mockCategories.map((item) => (
      <option value={item.id}>
        {item.icon} {item.name}
      </option>
    ));
  };

  return (
    <Page>
      <ScreenTitle title="Edit transaction" />

      <Input header="Amount" type="number" accept="number" placeholder="300" />
      <Input header="Label" type="text" placeholder="Car wash" />
      <Select header="Group" value="Personal" onChange={() => {}}>
        {renderGroups()}
      </Select>
      <Select header="Category" value="Car" onChange={() => {}}>
        {renderCategories()}
      </Select>

      <Button>Save</Button>
    </Page>
  );
};

export default EditTransactionScreen;
