import { Block, Button, List, ListInput } from 'konsta/react';
import { useNavigate } from 'react-router';
import BackIcon from 'src/components/UI/BackIcon';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const AddGroupMemberScreen = () => {
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
        <ScreenTitle title="Add member" />
      </Block>

      <List className="pr-4">
        <ListInput label="Telegram id" type="text" placeholder="@myspend" />

        <Block>
          <Button>Add member</Button>
        </Block>
      </List>
    </div>
  );
};

export default AddGroupMemberScreen;