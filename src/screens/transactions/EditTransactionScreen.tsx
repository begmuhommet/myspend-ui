import { Block, Button, List, ListInput } from 'konsta/react';
import { useNavigate } from 'react-router';
import BackIcon from 'src/components/UI/BackIcon';
import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockCategories } from 'src/mocks/mock-categories';
import { mockGroups } from 'src/mocks/mock-groups';

const EditTransactionScreen = () => {
  // Hooks
  const navigate = useNavigate();

  // Handlers
  const handleBack = () => {
    navigate(-1);
  };

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
    <>
      <ScreenHeader className="flex items-center gap-3">
        <BackIcon onClick={handleBack} />
        <ScreenTitle title="Edit transaction" />
      </ScreenHeader>

      <List className="pr-4">
        <ListInput label="Amount" type="number" accept="number" placeholder="300" />
        <div className="py-0.5" />
        <ListInput label="Label" type="text" placeholder="Car wash" />
        <div className="py-0.5" />
        <ListInput label="Group" type="select" dropdown placeholder="Personal">
          {renderGroups()}
        </ListInput>
        <div className="py-0.5" />
        <ListInput label="Category" type="select" dropdown placeholder="Car">
          {renderCategories()}
        </ListInput>

        <Block>
          <Button>Save</Button>
        </Block>
      </List>
    </>
  );
};

export default EditTransactionScreen;
