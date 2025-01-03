import { Button } from '@telegram-apps/telegram-ui';
import { NavLink } from 'react-router';
import Page from 'src/components/Page';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockBudgets } from 'src/mocks/mock-budgets';
import BudgetItem from './components/BudgetItem';

const BudgetsScreen = () => {
  // Renders
  const renderBudgets = () => {
    return mockBudgets.map((budget) => <BudgetItem key={budget.id} budget={budget} />);
  };

  return (
    <Page>
      <div className="flex items-center justify-between">
        <ScreenTitle title="Budgets" />
        <NavLink to="/settings/budgets/add">
          <Button size="s">Add budget</Button>
        </NavLink>
      </div>

      <div className="flex flex-col gap-2">{renderBudgets()}</div>
    </Page>
  );
};

export default BudgetsScreen;
