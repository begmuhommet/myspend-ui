import { App, Page } from 'konsta/react';
import { useState } from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import AppRouter from './router/AppRouter';

function MyApp() {
  // States
  const [options, setOptions] = useState({ platform: 'ios', theme: 'dark' });

  // Handlers
  const handleChangeTheme = (value: string) => {
    setOptions((prevState) => ({ ...prevState, theme: value }));
  };

  const handleChangePlatform = (value: string) => {
    setOptions((prevState) => ({ ...prevState, platform: value }));
  };

  // Renders
  return (
    <App safeAreas theme={options.platform} dark={options.theme === 'dark'}>
      <Page>
        <Header
          platform={options.platform}
          theme={options.theme}
          onChangePlatform={handleChangePlatform}
          onChangeTheme={handleChangeTheme}
        />
        <AppRouter />
        <Navbar />
      </Page>
    </App>
  );
}

export default MyApp;
