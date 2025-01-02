import { Route, Routes } from 'react-router';
import CategoriesScreen from 'src/screens/categories';
import AddCategoryScreen from 'src/screens/categories/AddCategoryScreen';
import EditCategoryScreen from 'src/screens/categories/EditCategoryScreen';
import DashboardScreen from 'src/screens/dashboard';
import GroupsScreen from 'src/screens/groups';
import AddGroupScreen from 'src/screens/groups/AddGroupScreen';
import EditGroupScreen from 'src/screens/groups/EditGroupScreen';
import GroupMembersScreen from 'src/screens/groups/GroupMembersScreen';
import ReportsScreen from 'src/screens/reports';
import TransactionsScreen from 'src/screens/transactions';
import AddTransactionScreen from 'src/screens/transactions/AddTransactionScreen';
import EditTransactionScreen from 'src/screens/transactions/EditTransactionScreen';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<DashboardScreen />} />
      <Route path="/groups">
        <Route index element={<GroupsScreen />} />
        <Route path=":groupId/transactions" element={<TransactionsScreen />} />
        <Route path=":groupId/edit" element={<EditGroupScreen />} />
        <Route path=":groupId/members" element={<GroupMembersScreen />} />
        <Route path="add" element={<AddGroupScreen />} />
      </Route>
      <Route path="/transactions">
        <Route index element={<AddTransactionScreen />} />
        <Route path=":transactionId/edit" element={<EditTransactionScreen />} />
      </Route>
      <Route path="/categories">
        <Route index element={<CategoriesScreen />} />
        <Route path="add" element={<AddCategoryScreen />} />
        <Route path=":categoryId/edit" element={<EditCategoryScreen />} />
      </Route>
      <Route path="/reports" element={<ReportsScreen />} />
    </Routes>
  );
};

export default AppRouter;
