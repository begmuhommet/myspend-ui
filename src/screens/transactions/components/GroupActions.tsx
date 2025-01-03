import { Modal, Placeholder } from '@telegram-apps/telegram-ui';
import { FC } from 'react';

type TProps = {
  open: boolean;
  onClose: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onMembers?: () => void;
};

const GroupActions: FC<TProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Modal open={open} onOpenChange={onClose}>
      <Placeholder description="Description" header="Title">
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{
            display: 'block',
            height: '144px',
            width: '144px',
          }}
        />
      </Placeholder>

      {/* <ActionsGroup>
        <ActionsButton onClick={onMembers} className="flex items-center gap-2">
          <TbUsers className="w-4 h-4" />
          Members
        </ActionsButton>
        <ActionsButton onClick={onEdit} className="flex items-center gap-2">
          <TbEdit className="w-4 h-4" />
          Edit
        </ActionsButton>
        <ActionsButton onClick={onDelete} className="flex items-center gap-2 text-red-500">
          <TbTrash className="w-4 h-4" />
          Delete
        </ActionsButton>
        <ActionsButton onClick={onClose}>Cancel</ActionsButton>
      </ActionsGroup> */}
    </Modal>
  );
};

export default GroupActions;
