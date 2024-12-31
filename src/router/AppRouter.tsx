import { Route, Routes } from 'react-router';
import CategoriesScreen from 'src/screens/categories';
import DashboardScreen from 'src/screens/dashboard';
import GroupsScreen from 'src/screens/groups';
import ReportsScreen from 'src/screens/reports';
import TransactionsScreen from 'src/screens/transactions';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardScreen />} />
      <Route path="/groups" element={<GroupsScreen />} />
      <Route path="/transactions" element={<TransactionsScreen />} />
      <Route path="/categories" element={<CategoriesScreen />} />
      <Route path="/reports" element={<ReportsScreen />} />
    </Routes>
  );
};

export default AppRouter;
