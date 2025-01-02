import { Block, Button, List, ListInput } from 'konsta/react';
import { useNavigate } from 'react-router';
import BackIcon from 'src/components/UI/BackIcon';
import EmojiInput from 'src/components/UI/EmojiInput';
import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const EditGroupScreen = () => {
  // Hooks
  const navigate = useNavigate();

  // Handlers
  const handleBack = () => {
    navigate(-1);
  };

  // Renders
  return (
    <>
      <ScreenHeader className="flex items-center gap-3">
        <BackIcon onClick={handleBack} />
        <ScreenTitle title="Edit group" />
      </ScreenHeader>

      <List className="pr-4">
        <ListInput label="Name" type="text" placeholder="Grocery" />
        <div className="py-0.5" />
        <ListInput label="Name alias" type="text" placeholder="Grocery" />
        <div className="py-0.5" />
        <EmojiInput value="🪖" onSelect={() => {}} />
        <div className="py-0.5" />
        <ListInput label="Budget" type="number" placeholder="3400" />
        <div className="py-0.5" />
        <ListInput label="Currency" type="number" placeholder="3000" />

        <Block>
          <Button>Save</Button>
        </Block>
      </List>
    </>
  );
};

export default EditGroupScreen;
