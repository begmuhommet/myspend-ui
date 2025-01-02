import { useNavigate } from 'react-router';
import BackIcon from 'src/components/UI/BackIcon';
import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';

const BudgetsScreen = () => {
  // Hooks
  const navigate = useNavigate();

  // Handlers
  const handleGoBack = () => {
    navigate(-1);
  };

  // Renders
  return (
    <>
      <ScreenHeader className="flex items-center justify-between">
        <BackIcon onClick={handleGoBack} />
        <ScreenTitle title="Budgets" />
      </ScreenHeader>
    </>
  );
};

export default BudgetsScreen;
