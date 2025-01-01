import { Icon } from 'konsta/react';
import { IoCar, IoCart, IoFastFood, IoFilm, IoFitness, IoHome } from 'react-icons/io5';

const categoryIcons: { [key: string]: JSX.Element } = {
  Cars: <IoCar className="w-5 h-5" />,
  Food: <IoFastFood className="w-5 h-5" />,
  Utilities: <IoHome className="w-5 h-5" />,
  Health: <IoFitness className="w-5 h-5" />,
  Entertainment: <IoFilm className="w-5 h-5" />,
  Beverages: <IoCart className="w-5 h-5" />,
};

type TProps = {
  category: string;
};

const CategoryIcon = (props: TProps) => {
  const { category } = props;

  return (
    <div className="flex items-center justify-center bg-gray-700 p-2 rounded-full">
      <Icon ios={categoryIcons[category]} material={categoryIcons[category]} />
    </div>
  );
};

export default CategoryIcon;
