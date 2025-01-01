import { Card, Icon } from 'konsta/react';
import { FC } from 'react';
import { TbEdit, TbTrash } from 'react-icons/tb';
import { NavLink } from 'react-router';
import CategoryIcon from './CategoryIcon';

type IProps = {
  category: string;
};

const CategoryItem: FC<IProps> = (props) => {
  const { category } = props;

  return (
    <Card className="!m-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CategoryIcon category={category} />
          <h2 className="text-md font-medium">{category}</h2>
        </div>

        <div className="flex items-center gap-3">
          <NavLink to="/">
            <Icon ios={<TbEdit className="w-5 h-5" />} />
          </NavLink>
          <NavLink to="/">
            <Icon ios={<TbTrash className="w-5 h-5" />} />
          </NavLink>
        </div>
      </div>
    </Card>
  );
};

export default CategoryItem;
