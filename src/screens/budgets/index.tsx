import { Button } from 'konsta/react';
import { NavLink, useNavigate } from 'react-router';
import BackIcon from 'src/components/UI/BackIcon';
import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockBudgets } from 'src/mocks/mock-budgets';
import BudgetItem from './components/BudgetItem';

const BudgetsScreen = () => {
  // Hooks
  const navigate = useNavigate();

  // Handlers
  const handleGoBack = () => {
    navigate(-1);
  };

  // Renders
  const renderBudgets = () => {
    return mockBudgets.map((budget) => <BudgetItem key={budget.id} budget={budget} />);
  };

  return (
    <>
      <ScreenHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BackIcon onClick={handleGoBack} />
          <ScreenTitle title="Budgets" />
        </div>
        <NavLink to="/settings/budgets/add">
          <Button inline>Add budget</Button>
        </NavLink>
      </ScreenHeader>

      <div className="flex flex-col gap-2">{renderBudgets()}</div>
    </>
  );
};

export default BudgetsScreen;
