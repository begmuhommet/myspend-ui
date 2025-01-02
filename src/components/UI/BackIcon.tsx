import { Icon } from 'konsta/react';
import { FC } from 'react';
import { IoChevronBack } from 'react-icons/io5';

type TProps = {
  onClick: () => void;
};

const BackIcon: FC<TProps> = (props) => {
  const { onClick } = props;

  return (
    <Icon
      ios={<IoChevronBack className="w-4 h-4" onClick={onClick} />}
      material={<IoChevronBack className="w-4 h-4" onClick={onClick} />}
    />
  );
};

export default BackIcon;
