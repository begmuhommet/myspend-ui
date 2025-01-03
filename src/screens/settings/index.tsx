import { Cell } from '@telegram-apps/telegram-ui';
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

      <Cell
        before={<IoApps />}
        onClick={handleOpenCategories}
        style={{ borderBottom: `1px solid var(--tgui--secondary_bg_color)` }}
      >
        Categories
      </Cell>
      <Cell
        before={<IoCalculatorSharp />}
        onClick={handleOpenBudgets}
        style={{ borderBottom: `1px solid var(--tgui--secondary_bg_color)` }}
      >
        Budgets
      </Cell>
      <Cell
        before={<IoGlobeOutline />}
        onClick={handleOpenCurrencies}
        style={{ borderBottom: `1px solid var(--tgui--secondary_bg_color)` }}
      >
        Currencies
      </Cell>
    </Page>
  );
};

export default SettingsScreen;
