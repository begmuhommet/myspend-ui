import { Block, Button } from 'konsta/react';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import GroupItem from './components/GroupItem';

const groups = [
  { name: 'Personal', balance: 10, spent: 30, budget: 100 },
  { name: 'Family', balance: 140, spent: 80, budget: 150 },
  { name: 'Business', balance: 50, spent: 100, budget: 200 },
];

const GroupsScreen = () => {
  const renderGroups = () => {
    return groups.map((group) => <GroupItem key={group.name} group={group} />);
  };

  return (
    <div>
      <Block className="flex items-center justify-between">
        <ScreenTitle title="Groups" />
        <Button inline>Add</Button>
      </Block>

      <div className="flex flex-col gap-3 py-2">{renderGroups()}</div>
    </div>
  );
};

export default GroupsScreen;
