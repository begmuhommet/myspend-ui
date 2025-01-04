import { miniApp, useLaunchParams, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import '@telegram-apps/telegram-ui/dist/styles.css';
import { BrowserRouter } from 'react-router';
import AppTabbar from 'src/components/tabbar';
import AppRouter from 'src/router/AppRouter';
import './styles/index.css';

const App = () => {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  const theme = isDark ? 'dark' : 'light';
  const platform = ['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base';

  // Renders
  return (
    <AppRoot appearance={theme} platform={platform}>
      <BrowserRouter>
        <AppRouter />
        <AppTabbar />
      </BrowserRouter>
    </AppRoot>
  );
};

export default App;
