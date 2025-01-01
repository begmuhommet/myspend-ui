import { Block } from 'konsta/react';
import { useState } from 'react';
import { IoChevronBack, IoSettingsOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router';
import DeleteConfirmDialog from 'src/components/UI/DeleteConfirmDialog';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockTransactions } from 'src/mocks/mock-transactions';
import GroupActions from '../groups/components/GroupActions';
import TransactionItem from './components/TransactionItem';

const TransactionsScreen = () => {
  const [open, setOpen] = useState({ action: false, delete: false });

  // Hooks
  const navigate = useNavigate();
  const { groupId } = useParams();

  // Handlers
  const handleGoBack = () => {
    navigate('/groups');
  };

  const handleClose = (key: keyof typeof open, value: boolean) => {
    setOpen({ ...open, [key]: value });
  };

  const handleEdit = () => {
    navigate(`/groups/${groupId}/edit`);
  };

  const handleOpenDelete = () => {
    setOpen({ action: false, delete: true });
  };

  const handleMembers = () => {
    navigate(`/groups/${groupId}/members`);
  };

  const handleDelete = () => {
    setOpen((prevState) => ({ ...prevState, delete: false }));
  };

  // Renders
  const renderTransactions = () => {
    return mockTransactions.map((transaction) => <TransactionItem key={transaction.label} transaction={transaction} />);
  };

  return (
    <div>
      <Block className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoChevronBack className="w-4 h-4" onClick={handleGoBack} />
          <ScreenTitle title="Group Transactions" />
        </div>
        <IoSettingsOutline className="w-5 h-5" onClick={() => handleClose('action', true)} />
      </Block>

      <Block className="flex flex-col gap-2">{renderTransactions()}</Block>

      <GroupActions
        open={open.action}
        onClose={() => handleClose('action', false)}
        onEdit={handleEdit}
        onDelete={handleOpenDelete}
        onMembers={handleMembers}
      />

      <DeleteConfirmDialog
        open={open.delete}
        onClose={() => handleClose('delete', false)}
        onConfirm={handleDelete}
        title="Delete Group"
        description="Are you sure you want to delete this group?"
      />
    </div>
  );
};

export default TransactionsScreen;
