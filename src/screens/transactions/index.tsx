import { IconButton } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router';
import Page from 'src/components/Page';
import DeleteConfirmDialog from 'src/components/UI/DeleteConfirmDialog';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockTransactions } from 'src/mocks/mock-transactions';
import GroupActions from './components/GroupActions';
import TransactionItem from './components/TransactionItem';

const TransactionsScreen = () => {
  const [open, setOpen] = useState({ action: false, delete: false });

  // Hooks
  const navigate = useNavigate();
  const { groupId } = useParams();

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
    <Page>
      <div className="flex items-center justify-between">
        <ScreenTitle title="Group Transactions" />
        <IconButton onClick={() => handleClose('action', true)}>
          <IoSettingsOutline className="w-5 h-5" />
        </IconButton>
      </div>

      <div className="flex flex-col gap-2">{renderTransactions()}</div>

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
    </Page>
  );
};

export default TransactionsScreen;
