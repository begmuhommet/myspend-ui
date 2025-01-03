import { Navigate, Route, Routes } from 'react-router';
import BudgetsScreen from 'src/screens/budgets';
import AddBudgetScreen from 'src/screens/budgets/AddBudgetScreen';
import EditBudgetScreen from 'src/screens/budgets/EditBudgetScreen';
import CategoriesScreen from 'src/screens/categories';
import AddCategoryScreen from 'src/screens/categories/AddCategoryScreen';
import EditCategoryScreen from 'src/screens/categories/EditCategoryScreen';
import CurrenciesScreen from 'src/screens/currencies';
import AddCurrencyScreen from 'src/screens/currencies/AddCurrencyScreen';
import EditCurrencyScreen from 'src/screens/currencies/EditCurrencyScreen';
import DashboardScreen from 'src/screens/dashboard';
import GroupsScreen from 'src/screens/groups';
import AddGroupMemberScreen from 'src/screens/groups/AddGroupMemberScreen';
import AddGroupScreen from 'src/screens/groups/AddGroupScreen';
import EditGroupScreen from 'src/screens/groups/EditGroupScreen';
import GroupMembersScreen from 'src/screens/groups/GroupMembersScreen';
import ReportsScreen from 'src/screens/reports';
import SettingsScreen from 'src/screens/settings';
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
        <Route path=":groupId/members/add" element={<AddGroupMemberScreen />} />
        <Route path="add" element={<AddGroupScreen />} />
      </Route>

      <Route path="/transactions">
        <Route index element={<AddTransactionScreen />} />
        <Route path=":transactionId/edit" element={<EditTransactionScreen />} />
      </Route>

      <Route path="/settings">
        <Route index element={<SettingsScreen />} />

        <Route path="categories">
          <Route index element={<CategoriesScreen />} />
          <Route path="add" element={<AddCategoryScreen />} />
          <Route path=":categoryId/edit" element={<EditCategoryScreen />} />
        </Route>

        <Route path="budgets">
          <Route index element={<BudgetsScreen />} />
          <Route path="add" element={<AddBudgetScreen />} />
          <Route path=":budgetId/edit" element={<EditBudgetScreen />} />
        </Route>

        <Route path="currencies">
          <Route index element={<CurrenciesScreen />} />
          <Route path="add" element={<AddCurrencyScreen />} />
          <Route path=":currencyId/edit" element={<EditCurrencyScreen />} />
        </Route>
      </Route>

      <Route path="/reports" element={<ReportsScreen />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
