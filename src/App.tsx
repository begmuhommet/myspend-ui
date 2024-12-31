import { App, Page } from 'konsta/react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router';
import Header from 'src/components/header';
import Navbar from 'src/components/navbar';
import AppRouter from 'src/router/AppRouter';

function MyApp() {
  // States
  const [options] = useState({ platform: 'ios', theme: 'dark' });

  // Renders
  return (
    <BrowserRouter>
      <App safeAreas theme={options.platform === 'material' ? 'material' : 'ios'} dark={options.theme === 'dark'}>
        <Page>
          <Header />
          <AppRouter />
          <Navbar />
        </Page>
      </App>
    </BrowserRouter>
  );
}

export default MyApp;
