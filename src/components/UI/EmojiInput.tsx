import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { ListInput, Sheet } from 'konsta/react';
import { FC, useState } from 'react';

type TProps = {
  onSelect: (value: string) => void;
  value: string;
};

const EmojiInput: FC<TProps> = (props) => {
  const { onSelect, value } = props;

  // States
  const [open, setOpen] = useState(false);

  // Handlers
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (emoji: EmojiClickData) => {
    onSelect(emoji.emoji);
    handleClose();
  };

  // Renders
  return (
    <>
      <ListInput label="Emoji" type="text" value={value} onClick={handleOpen} />
      <Sheet className="pb-14 w-full py-2 flex justify-center" opened={open} onBackdropClick={handleClose}>
        <EmojiPicker onEmojiClick={handleSelect} />
      </Sheet>
    </>
  );
};

export default EmojiInput;
