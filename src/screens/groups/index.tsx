import { Button } from 'konsta/react';
import GroupItem from '../../components/UI/group/GroupItem';
import ScreenTitle from '../../components/UI/typography/ScreenTitle';

const groups = [
  { name: 'Personal', balance: 10, spent: 30, budget: 100 },
  { name: 'Family', balance: 140, spent: 80, budget: 150 },
  { name: 'Business', balance: 50, spent: 100, budget: 200 },
];

const GroupsScreen = () => {
  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <ScreenTitle title="Groups" />
        <Button className="w-fit">Add</Button>
      </div>

      <div className="flex flex-col gap-3 py-2">
        {groups.map((group) => (
          <GroupItem group={group} />
        ))}
      </div>
    </div>
  );
};

export default GroupsScreen;
