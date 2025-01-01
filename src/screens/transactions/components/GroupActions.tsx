import { Actions, ActionsButton, ActionsGroup } from 'konsta/react';
import { FC } from 'react';
import { TbEdit, TbTrash, TbUsers } from 'react-icons/tb';

type TProps = {
  open: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onMembers: () => void;
};

const GroupActions: FC<TProps> = (props) => {
  const { open, onClose, onEdit, onDelete, onMembers } = props;

  return (
    <Actions opened={open} onBackdropClick={onClose}>
      <ActionsGroup>
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
      </ActionsGroup>
    </Actions>
  );
};

export default GroupActions;
