import { Button, Modal } from '@telegram-apps/telegram-ui';
import { FC } from 'react';
import { IoCreateOutline, IoPeopleOutline, IoTrashOutline } from 'react-icons/io5';

type TProps = {
  title?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onMembers?: () => void;
  open: boolean;
  onClose: () => void;
};

const GroupActions: FC<TProps> = (props) => {
  const { title, onEdit, onDelete, onMembers, onClose, open } = props;

  // Handlers
  const handleOpenChange = (open: boolean) => {
    if (open) return;
    onClose();
  };

  // Renders
  return (
    <Modal header={<Modal.Header>{title}</Modal.Header>} title={title} open={open} onOpenChange={handleOpenChange}>
      <div className="flex flex-col gap-2 px-4" style={{ height: 280 }}>
        <Button
          before={<IoPeopleOutline className="w-5 h-5" />}
          mode="gray"
          size="m"
          className="w-full"
          onClick={onMembers}
        >
          Members
        </Button>
        <Button
          before={<IoCreateOutline className="w-5 h-5" />}
          mode="gray"
          size="m"
          className="w-full"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          before={<IoTrashOutline className="w-5 h-5" />}
          mode="gray"
          size="m"
          className="w-full text-red-500"
          onClick={onDelete}
        >
          Delete
        </Button>
        <Button mode="gray" size="m" className="w-full" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default GroupActions;
