import { List, ListItem } from 'konsta/react';
import { IoApps, IoCalculatorSharp, IoGlobeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const SettingsScreen = () => {
  // Hooks
  const navigate = useNavigate();

  // Handlers
  const handleOpenCategories = () => {
    navigate('/settings/categories');
  };

  const handleOpenBudgets = () => {
    navigate('/settings/budgets');
  };

  const handleOpenCurrencies = () => {
    navigate('/settings/currencies');
  };

  // Renders
  return (
    <>
      <ScreenHeader>
        <ScreenTitle title="Settings" />
      </ScreenHeader>

      <List>
        <ListItem title="Categories" media={<IoApps />} onClick={handleOpenCategories} />
        <ListItem title="Budgets" media={<IoCalculatorSharp />} onClick={handleOpenBudgets} />
        <ListItem title="Currencies" media={<IoGlobeOutline />} onClick={handleOpenCurrencies} />
      </List>
    </>
  );
};

export default SettingsScreen;
