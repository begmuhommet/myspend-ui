import { Icon } from 'konsta/react';
import { FC } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { TbTrash } from 'react-icons/tb';
import AppCard from 'src/components/UI/AppCard';

type TProps = {
  name: string;
  telegram_username: string;
  onDelete: () => void;
};

const MemberItem: FC<TProps> = (props) => {
  const { name, telegram_username, onDelete } = props;

  return (
    <AppCard>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon ios={<IoPersonOutline className="w-5 h-5" />} material={<IoPersonOutline className="w-5 h-5" />} />
          <div className="flex flex-col">
            <h2 className="text-md font-medium">{name}</h2>
            <p className="text-sm text-gray-500">{telegram_username}</p>
          </div>
        </div>

        <Icon ios={<TbTrash className="w-5 h-5 text-error-500" />} onClick={onDelete} />
      </div>
    </AppCard>
  );
};

export default MemberItem;
