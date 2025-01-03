import { Button } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import Page from 'src/components/Page';
import DeleteConfirmDialog from 'src/components/UI/DeleteConfirmDialog';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockCategories } from 'src/mocks/mock-categories';
import CategoryItem from './components/CategoryItem';

const CategoriesScreen = () => {
  const [open, setOpen] = useState(false);

  // Hooks
  const navigate = useNavigate();

  // Handlers
  const handleOpenDelete = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    console.log('delete');
    handleCloseDelete();
  };

  const handleEdit = (id: string) => {
    navigate(`/settings/categories/${id}/edit`);
  };

  const handleCloseDelete = () => {
    setOpen(false);
  };

  // Renders
  const renderCategories = () => {
    return mockCategories.map((category) => (
      <CategoryItem key={category.id} category={category.name} onDelete={handleOpenDelete} onEdit={handleEdit} />
    ));
  };

  return (
    <Page>
      <div className="flex items-center justify-between">
        <ScreenTitle title="Categories" />
        <NavLink to="/settings/categories/add">
          <Button size="s">Add category</Button>
        </NavLink>
      </div>

      <div className="flex flex-col gap-2 py-2">{renderCategories()}</div>

      <DeleteConfirmDialog
        title="Delete category"
        description="Are you sure you want to delete this category?"
        open={open}
        onClose={handleCloseDelete}
        onConfirm={handleDelete}
      />
    </Page>
  );
};

export default CategoriesScreen;
