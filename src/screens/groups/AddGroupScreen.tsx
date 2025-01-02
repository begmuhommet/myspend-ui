import { Block, Button, List, ListInput } from 'konsta/react';
import { useNavigate } from 'react-router';
import BackIcon from 'src/components/UI/BackIcon';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const AddGroupScreen = () => {
  // Hooks
  const navigate = useNavigate();

  // Handlers
  const handleBack = () => {
    navigate(-1);
  };

  // Renders
  return (
    <div>
      <Block className="flex items-center gap-3">
        <BackIcon onClick={handleBack} />
        <ScreenTitle title="Add group" />
      </Block>

      <List className="pr-4">
        <ListInput label="Name" type="text" placeholder="Family" />
        <div className="py-0.5" />
        <ListInput label="Name alias" type="text" placeholder="f" />
        <div className="py-0.5" />
        <ListInput label="Icon" type="text" placeholder="🍛" />
        <div className="py-0.5" />
        <ListInput label="Budget" type="number" placeholder="3000" />
        <div className="py-0.5" />
        <ListInput label="Currency" type="text" placeholder="USD" />

        <Block>
          <Button>Add group</Button>
        </Block>
      </List>
    </div>
  );
};

export default AddGroupScreen;
