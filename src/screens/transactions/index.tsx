import { Block, List, ListInput, Segmented, SegmentedButton } from 'konsta/react';
import { useState } from 'react';

const TransactionsScreen = () => {
  // States
  const [data, setData] = useState<{ type: string }>({ type: 'spend' });

  // Handlers
  const handleChangeData = (key: keyof typeof data, value: string) => {
    setData((prevState) => ({ ...prevState, [key]: value }));
  };

  // Renders
  return (
    <div>
      <Block>
        <Segmented strong>
          <SegmentedButton strong active={data.type === 'spend'} onClick={() => handleChangeData('type', 'spend')}>
            Spend
          </SegmentedButton>
          <SegmentedButton strong active={data.type === 'income'} onClick={() => handleChangeData('type', 'income')}>
            Income
          </SegmentedButton>
        </Segmented>
      </Block>

      <List strong inset className="py-4">
        <ListInput outline type="number" accept="number" label="Amount" placeholder="300" className="block mb-2" />
        <div className="py-0.5" />
        <ListInput outline type="text" label="Label" placeholder="Rent payment" />
        <div className="py-0.5" />
        <ListInput outline type="select" label="Group" placeholder="Personal" dropdown>
          <option value="personal">Personal</option>
          <option value="family">Family</option>
        </ListInput>
        <div className="py-0.5" />
        <ListInput outline type="select" label="Category" placeholder="Category name" dropdown>
          <option value="grocery">Grocery</option>
          <option value="transport">Transport</option>
        </ListInput>

        <div className="py-0.5" />
        <ListInput
          outline
          type="textarea"
          label="Description (optional)"
          placeholder="Some other description you want to add"
          inputClassName="!h-20 resize-none"
        />
      </List>
    </div>
  );
};

export default TransactionsScreen;
