import { Button } from 'konsta/react';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockCategories } from 'src/mocks/mock-categories';
import CategoryItem from './components/CategoryItem';

const CategoriesScreen = () => {
  // Renders
  const renderCategories = () => {
    return mockCategories.map((category) => <CategoryItem key={category.id} category={category.name} />);
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
