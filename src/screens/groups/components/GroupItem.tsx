import { Card, Icon, Progressbar } from 'konsta/react';
import { IoPeopleOutline } from 'react-icons/io5';

type TProps = {
  group: { name: string; balance?: number; spent?: number; budget?: number };
};

const GroupItem = (props: TProps) => {
  const { group } = props;

  // Variables
  const spentProgress = group?.spent && group?.budget ? group.spent / group.budget : 0;

  // Renders
  return (
    <Card className="my-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon ios={<IoPeopleOutline className="w-4 h-4" />} material={<IoPeopleOutline className="w-4 h-4" />} />
          <h2 className="text-md font-extrabold">{group.name}</h2>
        </div>
        <h3 className="text-md font-bold text-green-500">{group.balance}</h3>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span className="text-xs font-light text-gray-400">Spent: {group.spent}</span>
          <span className="text-xs font-light text-gray-400">Budget: {group.budget}</span>
        </div>
        <div className="w-full">
          <Progressbar progress={spentProgress} />
        </div>
      </div>
    </Card>
  );
};

export default GroupItem;
