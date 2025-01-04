import { Caption, IconButton, Text } from '@telegram-apps/telegram-ui';
import { FC } from 'react';
import { IoPersonOutline, IoTrashOutline } from 'react-icons/io5';
import AppCard from 'src/components/UI/AppCard';

type TProps = {
  name: string;
  telegram_username: string;
  onDelete: () => void;
};

const MemberItem: FC<TProps> = (props) => {
  const { name, telegram_username, onDelete } = props;

  return (
    <AppCard className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <IoPersonOutline className="w-6 h-6" />
        <div className="flex flex-col">
          <Text weight="3">{name}</Text>
          <Caption weight="3" className="text-hint">
            {telegram_username}
          </Caption>
        </div>
      </div>

      <IconButton onClick={onDelete} size="s" mode="plain">
        <IoTrashOutline className="w-5 h-5 text-red-500" />
      </IconButton>
    </AppCard>
  );
};

export default MemberItem;
