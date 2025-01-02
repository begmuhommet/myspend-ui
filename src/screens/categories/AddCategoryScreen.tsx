import { Block, Button, List, ListInput } from 'konsta/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import BackIcon from 'src/components/UI/BackIcon';
import EmojiInput from 'src/components/UI/EmojiInput';
import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const AddCategoryScreen = () => {
  // States
  const [selectedEmoji, setSelectedEmoji] = useState('');

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
        <ScreenTitle title="Add category" />
      </ScreenHeader>

      <List className="pr-4">
        <ListInput label="Name" type="text" placeholder="Grocery" />
        <div className="py-0.5" />
        <EmojiInput value={selectedEmoji} onSelect={setSelectedEmoji} />
        <div className="py-0.5" />
        <ListInput label="Budget" type="number" placeholder="3000" />

        <Block className="my-8">
          <Button>Add category</Button>
        </Block>
      </List>
    </>
  );
};

export default AddCategoryScreen;
