import { Block, Button, List, ListInput, Segmented, SegmentedButton } from 'konsta/react';
import { useState } from 'react';
import { mockCategories } from 'src/mocks/mock-categories';
import { mockGroups } from 'src/mocks/mock-groups';

const AddTransactionScreen = () => {
  const [activeSegmented, setActiveSegmented] = useState(1);

  // Renders

  const renderGroups = () => {
    return mockGroups.map((item) => (
      <option value={item.id}>
        {item.icon} {item.name}
      </option>
    ));
  };

  const renderCategories = () => {
    return mockCategories.map((item) => (
      <option value={item.id}>
        {item.icon} {item.name}
      </option>
    ));
  };

  return (
    <div>
      <Block>
        <Segmented strong>
          <SegmentedButton strong active={activeSegmented === 1} onClick={() => setActiveSegmented(1)}>
            Spend
          </SegmentedButton>
          <SegmentedButton strong active={activeSegmented === 2} onClick={() => setActiveSegmented(2)}>
            Income
          </SegmentedButton>
        </Segmented>
      </Block>

      <List className="pr-4">
        <ListInput label="Amount" type="number" accept="number" placeholder="300" />
        <div className="py-0.5" />
        <ListInput label="Label" type="text" placeholder="Car wash" />
        <div className="py-0.5" />
        <ListInput label="Group" type="select" dropdown placeholder="Personal">
          {renderGroups()}
        </ListInput>
        <div className="py-0.5" />
        <ListInput label="Category" type="select" dropdown placeholder="Car">
          {renderCategories()}
        </ListInput>

        <Block>
          <Button>Add Transaction</Button>
        </Block>
      </List>
    </div>
  );
};

export default AddTransactionScreen;
