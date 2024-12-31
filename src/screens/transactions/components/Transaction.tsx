import { Card, Icon } from 'konsta/react';
import { FC } from 'react';
import { IoCar } from 'react-icons/io5';

import { IoCart, IoFastFood, IoFilm, IoFitness, IoHome } from 'react-icons/io5';

const categoryIcons: { [key: string]: JSX.Element } = {
  Cars: <IoCar className="w-5 h-5" />,
  Food: <IoFastFood className="w-5 h-5" />,
  Utilities: <IoHome className="w-5 h-5" />,
  Health: <IoFitness className="w-5 h-5" />,
  Entertainment: <IoFilm className="w-5 h-5" />,
  Beverages: <IoCart className="w-5 h-5" />,
};

type TProps = {
  spend: { label: string; amount: number; category: string };
};

const Transaction: FC<TProps> = (props) => {
  const { spend } = props;

  return (
    <Card className="!m-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-center bg-gray-700 p-2 rounded-full">
            <Icon ios={categoryIcons[spend.category]} material={categoryIcons[spend.category]} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-md font-light">{spend.label}</h2>
            <h1 className="text-xs font-medium text-gray-400">{spend.category}</h1>
          </div>
        </div>

        <span className="text-md font-extrabold">{spend.amount}</span>
      </div>
    </Card>
  );
};

export default Transaction;
