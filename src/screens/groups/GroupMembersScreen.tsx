import { Button } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router';
import Page from 'src/components/Page';
import DeleteConfirmDialog from 'src/components/UI/DeleteConfirmDialog';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockMembers } from 'src/mocks/mock-members';
import MemberItem from './components/MemberItem';

const GroupMembersScreen = () => {
  // States
  const [openDelete, setOpenDelete] = useState(false);

  // Hooks
  const { groupId } = useParams();

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleDeleteMember = () => {
    console.log('delete member');
    setOpenDelete(false);
  };

  // Renders
  const renderMembers = () => {
    return mockMembers.map((member) => (
      <MemberItem
        key={member.id}
        name={member.name}
        telegram_username={member.telegram_username}
        onDelete={handleOpenDelete}
      />
    ));
  };

  return (
    <Page>
      <div className="flex items-center gap-2 justify-between">
        <ScreenTitle title="Group members" />

        <NavLink to={`/groups/${groupId}/members/add`}>
          <Button size="s">Add member</Button>
        </NavLink>
      </div>

      <div className="flex flex-col gap-3 py-2">{renderMembers()}</div>

      <DeleteConfirmDialog
        title="Delete member"
        description="Are you sure you want to delete this member?"
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={handleDeleteMember}
      />
    </Page>
  );
};

export default GroupMembersScreen;
