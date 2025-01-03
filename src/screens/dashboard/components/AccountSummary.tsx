import { Cell, Headline, LargeTitle, Subheadline, Title } from '@telegram-apps/telegram-ui';
import { GiTwoCoins } from 'react-icons/gi';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import AppCard from 'src/components/UI/AppCard';

const AccountSummary = () => {
  return (
    <>
      <AppCard className="relative w-full flex items-center justify-between box-border p-4 mb-2">
        <div className="flex flex-col gap-2">
          <Headline weight="3" plain>
            Total Balance
          </Headline>
          <LargeTitle weight="1" plain>
            1000
          </LargeTitle>
        </div>

        <GiTwoCoins className="w-36 h-36 text-gray-400 absolute right-0 top-auto bottom-auto" />
      </AppCard>

      <div className="flex items-center justify-between gap-2">
        <AppCard className="w-full flex-1 relative">
          <Cell className="flex flex-col items-start gap-2">
            <Subheadline weight="3" plain>
              Income
            </Subheadline>
            <Title weight="2" className="text-green-500" plain>
              2,400,00
            </Title>
          </Cell>
          <IoArrowDown className="w-4 h-4 text-green-500 absolute right-2 top-2" />
        </AppCard>
        <AppCard className="w-full flex-1 relative">
          <Cell className="flex flex-col items-start gap-2">
            <Subheadline weight="3" plain>
              Spent
            </Subheadline>
            <Title weight="1" className="text-red-500" plain>
              1,200,00
            </Title>
          </Cell>
          <IoArrowUp className="w-4 h-4 text-red-500 absolute right-2 top-2" />
        </AppCard>
      </div>
    </>
  );
};

export default AccountSummary;
