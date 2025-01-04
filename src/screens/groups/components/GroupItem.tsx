import { Caption, Headline, Progress, Text } from '@telegram-apps/telegram-ui';
import { IoPeopleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';
import AppCard from 'src/components/UI/AppCard';

type TProps = {
  group: { name: string; balance?: number; spent?: number; budget?: number };
};

const GroupItem = (props: TProps) => {
  const { group } = props;

  // Variables
  const spentProgress = group?.spent && group?.budget ? group.spent / group.budget : 0;

  // Renders
  return (
    <NavLink to={`/groups/${group.name}/transactions`}>
      <AppCard className="w-full box-border">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <IoPeopleOutline className="w-5 h-5" />
            <Headline weight="3">{group.name}</Headline>
          </div>
          <Text weight="1" className="text-green-500">
            {group.balance}
          </Text>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <Caption weight="3" className="text-red-500 opacity-90">
              Spent: {group.spent}
            </Caption>
            <Caption weight="3" className="text-hint">
              Budget: {group.budget}
            </Caption>
          </div>
          <div className="w-full">
            <Progress className="bg-primary" value={spentProgress * 100} />
          </div>
        </div>
      </AppCard>
    </NavLink>
  );
};

export default GroupItem;
