import { Headline, IconButton } from '@telegram-apps/telegram-ui';
import { FC } from 'react';
import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5';
import AppCard from 'src/components/UI/AppCard';
import { categoryIcons } from 'src/mocks/mock-categories';

type IProps = {
  category: string;
  onDelete: () => void;
  onEdit: (id: string) => void;
};

const CategoryItem: FC<IProps> = (props) => {
  const { category, onDelete, onEdit } = props;

  return (
    <AppCard className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {categoryIcons[category as keyof typeof categoryIcons]}
        <Headline weight="3">{category}</Headline>
      </div>

      <div className="flex items-center gap-1">
        <IconButton mode="plain" size="s" onClick={() => onEdit(category)}>
          <IoCreateOutline className="w-5 h-5" />
        </IconButton>
        <IconButton mode="plain" size="s" onClick={onDelete}>
          <IoTrashOutline className="w-5 h-5 text-red-500" />
        </IconButton>
      </div>
    </AppCard>
  );
};

export default CategoryItem;
