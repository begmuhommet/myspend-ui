import { Block, Button } from 'konsta/react';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockGroups } from 'src/mocks/mock-groups';
import GroupItem from './components/GroupItem';

const GroupsScreen = () => {
  const renderGroups = () => {
    return mockGroups?.map((group) => <GroupItem key={group.name} group={group} />);
  };

  return (
    <div>
      <Block className="flex items-center justify-between">
        <ScreenTitle title="Groups" />
        <Button inline>Add group</Button>
      </Block>

      <div className="flex flex-col gap-3 py-2">{renderGroups()}</div>
    </div>
  );
};

export default GroupsScreen;
