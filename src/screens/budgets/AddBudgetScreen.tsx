import { Block, Button, List, ListInput } from 'konsta/react';
import { useNavigate } from 'react-router';
import BackIcon from 'src/components/UI/BackIcon';
import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const AddBudgetScreen = () => {
  // Hooks
  const navigate = useNavigate();

  // Handlers
  const handleGoBack = () => {
    navigate(-1);
  };

  // Renders
  return (
    <>
      <ScreenHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BackIcon onClick={handleGoBack} />
          <ScreenTitle title="Add budget" />
        </div>
      </ScreenHeader>

      <List>
        <ListInput label="Amount" type="number" accept="number" placeholder="3200" />
        <div className="py-0.5" />
        <ListInput label="Start date" type="date" accept="date" />
        <div className="py-0.5" />
        <ListInput label="End date" type="date" accept="date" />
        <Block>
          <Button>Save</Button>
        </Block>
      </List>
    </>
  );
};

export default AddBudgetScreen;
