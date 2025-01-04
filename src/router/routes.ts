export enum AppRoutes {
  DASHBOARD = '/',

  GROUPS = '/groups',
  GROUP_EDIT = '/groups/:groupId/edit',
  GROUP_MEMBERS = '/groups/:groupId/members',
  GROUP_MEMBERS_ADD = '/groups/:groupId/members/add',
  GROUP_ADD = '/groups/add',

  TRANSACTIONS = '/groups/:groupId/transactions',
  TRANSACTIONS_EDIT = '/groups/:groupId/transactions/edit',
  TRANSACTIONS_ADD = '/transactions/add',

  SETTINGS = '/settings',

  CATEGORIES = '/settings/categories',
  CATEGORIES_ADD = '/settings/categories/add',
  CATEGORIES_EDIT = '/settings/categories/:categoryId/edit',

  BUDGETS = '/settings/budgets',
  BUDGETS_ADD = '/settings/budgets/add',
  BUDGETS_EDIT = '/settings/budgets/:budgetId/edit',

  CURRENCIES = '/settings/currencies',
  CURRENCIES_ADD = '/settings/currencies/add',
  CURRENCIES_EDIT = '/settings/currencies/:currencyId/edit',

  REPORTS = '/reports',
}
