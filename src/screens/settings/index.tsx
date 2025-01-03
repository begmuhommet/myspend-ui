import { Cell, Divider } from '@telegram-apps/telegram-ui';
import { IoApps, IoCalculatorSharp, IoGlobeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import Page from 'src/components/Page';
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
    <Page>
      <ScreenTitle title="Settings" />

      <Cell before={<IoApps />} onClick={handleOpenCategories}>
        Categories
      </Cell>
      <Divider />
      <Cell before={<IoCalculatorSharp />} onClick={handleOpenBudgets}>
        Budgets
      </Cell>
      <Divider />
      <Cell before={<IoGlobeOutline />} onClick={handleOpenCurrencies}>
        Currencies
      </Cell>
    </Page>
  );
};

export default SettingsScreen;
