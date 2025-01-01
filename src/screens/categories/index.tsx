import { Button } from 'konsta/react';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import CategoryItem from './components/CategoryItem';

const categories = ['Food', 'Cars', 'Utilities', 'Health', 'Entertainment', 'Beverages'];

const CategoriesScreen = () => {
  // Renders
  const renderCategories = () => {
    return categories.map((category) => <CategoryItem key={category} category={category} />);
  };

  return (
    <div className="m-4">
      <div className="flex items-center justify-between mb-4">
        <ScreenTitle title="Categories" />
        <Button inline>Add category</Button>
      </div>

      <div className="flex flex-col gap-2">{renderCategories()}</div>
    </div>
  );
};

export default CategoriesScreen;
