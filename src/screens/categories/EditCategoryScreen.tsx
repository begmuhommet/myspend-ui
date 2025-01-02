import { Block, Button, List, ListInput } from 'konsta/react';

const EditCategoryScreen = () => {
  return (
    <div>
      <List className="pr-4">
        <ListInput label="Name" type="text" placeholder="Grocery" />
        <div className="py-0.5" />
        <ListInput label="Icon" type="text" placeholder="🍛" />
        <div className="py-0.5" />
        <ListInput label="Budget" type="number" placeholder="3000" />

        <Block>
          <Button>Save</Button>
        </Block>
      </List>
    </div>
  );
};

export default EditCategoryScreen;
