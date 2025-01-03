import { Button, Input, List, SegmentedControl, Select } from '@telegram-apps/telegram-ui';
import { SegmentedControlItem } from '@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem';
import { useState } from 'react';
import Page from 'src/components/Page';
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
      <option key={item.id} value={item.id}>
        {item.icon} {item.name}
      </option>
    ));
  };

  return (
    <Page back={false}>
      <SegmentedControl className="mb-4">
        <SegmentedControlItem onClick={() => setActiveSegmented(1)} selected={activeSegmented === 1}>
          Spend
        </SegmentedControlItem>
        <SegmentedControlItem onClick={() => setActiveSegmented(2)} selected={activeSegmented === 2}>
          Income
        </SegmentedControlItem>
      </SegmentedControl>

      <List>
        <Input header="Amount" type="number" accept="number" placeholder="300" />
        <Input header="Label" type="text" placeholder="Car wash" />
        <Select header="Group" value="Personal">
          {renderGroups()}
        </Select>
        <Select header="Category" value="Car">
          {renderCategories()}
        </Select>

        <div className="py-1" />

        <Button mode="filled" size="m" className="w-full">
          Add Transaction
        </Button>
      </List>
    </Page>
  );
};

export default AddTransactionScreen;
