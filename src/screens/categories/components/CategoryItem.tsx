import { Card, Icon } from 'konsta/react';
import { FC } from 'react';
import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5';
import { categoryIcons } from 'src/mocks/mock-categories';

type IProps = {
  category: string;
  onDelete: () => void;
  onEdit: (id: string) => void;
};

const CategoryItem: FC<IProps> = (props) => {
  const { category, onDelete, onEdit } = props;

  return (
    <Card className="!m-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {categoryIcons[category as keyof typeof categoryIcons]}
          <h2 className="text-md font-medium">{category}</h2>
        </div>

        <div className="flex items-center gap-3">
          <Icon ios={<IoCreateOutline className="w-5 h-5" />} onClick={() => onEdit(category)} />
          <Icon ios={<IoTrashOutline className="w-5 h-5" />} onClick={onDelete} />
        </div>
      </div>
    </Card>
  );
};

export default CategoryItem;
