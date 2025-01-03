import { popup } from '@telegram-apps/sdk-react';
import { FC, useEffect } from 'react';

type TProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
};

const DeleteConfirmDialog: FC<TProps> = (props) => {
  const { open, onClose, onConfirm, title, description } = props;

  // Effects
  useEffect(() => {
    if (!open) return;
    popup.open({
      title,
      message: description,
      buttons: [
        { text: 'Cancel', id: 'cancel' },
        { text: 'Delete', id: 'delete' },
      ],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      postEvent: (event: any) => {
        console.log(event);

        if (event.id === 'delete') {
          onConfirm();
        }

        if (event.id === 'cancel') {
          onClose();
        }
      },
    });
  }, [open]);

  // Handlers
  return null;
};

export default DeleteConfirmDialog;
