import { Block, Button, List, ListInput } from 'konsta/react';

const AddCategoryScreen = () => {
  return (
    <div>
      <List className="pr-4">
        <ListInput label="Name" type="text" placeholder="Grocery" />
        <div className="py-0.5" />
        <ListInput label="Icon" type="text" placeholder="🍛" />
        <div className="py-0.5" />
        <ListInput label="Budget" type="number" placeholder="3000" />

        <Block>
          <Button>Add category</Button>
        </Block>
      </List>
    </div>
  );
};

export default AddCategoryScreen;
