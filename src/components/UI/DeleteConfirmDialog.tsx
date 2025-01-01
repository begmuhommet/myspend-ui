import { Dialog, DialogButton } from 'konsta/react';
import { FC } from 'react';

type TProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
};

const DeleteConfirmDialog: FC<TProps> = (props) => {
  const { open, onClose, onConfirm, title, description } = props;

  // Renders
  const renderButtons = () => {
    return (
      <>
        <DialogButton onClick={onClose}>Cancel</DialogButton>
        <DialogButton strong onClick={onConfirm} className="text-red-500">
          Delete
        </DialogButton>
      </>
    );
  };

  return (
    <Dialog opened={open} onBackdropClick={onClose} title={title} content={description} buttons={renderButtons()} />
  );
};

export default DeleteConfirmDialog;
