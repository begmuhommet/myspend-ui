import { Button } from 'konsta/react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import BackIcon from 'src/components/UI/BackIcon';
import DeleteConfirmDialog from 'src/components/UI/DeleteConfirmDialog';
import ScreenHeader from 'src/components/UI/ScreenHeader';
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

  const handleGoBack = () => {
    navigate(-1);
  };

  // Renders
  const renderCategories = () => {
    return mockCategories.map((category) => (
      <CategoryItem key={category.id} category={category.name} onDelete={handleOpenDelete} onEdit={handleEdit} />
    ));
  };

  return (
    <>
      <ScreenHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BackIcon onClick={handleGoBack} />
          <ScreenTitle title="Categories" />
        </div>
        <NavLink to="/settings/categories/add">
          <Button inline>Add category</Button>
        </NavLink>
      </ScreenHeader>

      <div className="flex flex-col gap-2 m-4">{renderCategories()}</div>

      <DeleteConfirmDialog
        title="Delete category"
        description="Are you sure you want to delete this category?"
        open={open}
        onClose={handleCloseDelete}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default CategoriesScreen;
