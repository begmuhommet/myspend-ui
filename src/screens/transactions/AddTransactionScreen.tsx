import { Block, Button, List, ListInput, Segmented, SegmentedButton } from 'konsta/react';
import { useState } from 'react';

const AddTransactionScreen = () => {
  const [activeSegmented, setActiveSegmented] = useState(1);

  return (
    <div>
      <Block>
        <Segmented strong>
          <SegmentedButton strong active={activeSegmented === 2} onClick={() => setActiveSegmented(2)}>
            Spend
          </SegmentedButton>
          <SegmentedButton strong active={activeSegmented === 3} onClick={() => setActiveSegmented(3)}>
            Income
          </SegmentedButton>
        </Segmented>
      </Block>

      <List>
        <ListInput label="Amount" type="number" accept="number" placeholder="300" />
        <div className="py-0.5" />
        <ListInput label="Label" type="text" placeholder="Car wash" />
        <div className="py-0.5" />
        <ListInput label="Category" type="select" dropdown placeholder="Personal">
          <option value="personal">Personal</option>
          <option value="business">Business</option>
        </ListInput>
        <div className="py-0.5" />
        <ListInput label="Date" type="select" dropdown placeholder="Car">
          <option value="home">Home</option>
          <option value="work">Work</option>
        </ListInput>

        <Block>
          <Button>Add Transaction</Button>
        </Block>
      </List>
    </div>
  );
};

export default AddTransactionScreen;
