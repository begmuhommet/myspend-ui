import { Button } from 'konsta/react';
import { NavLink } from 'react-router';
import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockGroups } from 'src/mocks/mock-groups';
import GroupItem from './components/GroupItem';

const GroupsScreen = () => {
  const renderGroups = () => {
    return mockGroups?.map((group) => <GroupItem key={group.name} group={group} />);
  };

  return (
    <>
      <ScreenHeader className="flex items-center justify-between">
        <ScreenTitle title="Groups" />
        <NavLink to="/groups/add">
          <Button inline>Add group</Button>
        </NavLink>
      </ScreenHeader>

      <div className="flex flex-col gap-3 py-2">{renderGroups()}</div>
    </>
  );
};

export default GroupsScreen;
