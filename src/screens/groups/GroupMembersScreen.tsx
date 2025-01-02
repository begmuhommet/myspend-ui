import { Button } from 'konsta/react';
import { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router';
import BackIcon from 'src/components/UI/BackIcon';
import DeleteConfirmDialog from 'src/components/UI/DeleteConfirmDialog';
import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockMembers } from 'src/mocks/mock-members';
import MemberItem from './components/MemberItem';

const GroupMembersScreen = () => {
  // States
  const [openDelete, setOpenDelete] = useState(false);

  // Hooks
  const navigate = useNavigate();
  const { groupId } = useParams();

  // Handlers
  const handleGoBack = () => {
    navigate(-1);
  };

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
    <>
      <ScreenHeader className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-3">
          <BackIcon onClick={handleGoBack} />
          <ScreenTitle title="Group members" />
        </div>

        <NavLink to={`/groups/${groupId}/members/add`}>
          <Button inline>Add member</Button>
        </NavLink>
      </ScreenHeader>

      <div className="flex flex-col gap-3 m-4">{renderMembers()}</div>

      <DeleteConfirmDialog
        title="Delete member"
        description="Are you sure you want to delete this member?"
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={handleDeleteMember}
      />
    </>
  );
};

export default GroupMembersScreen;
