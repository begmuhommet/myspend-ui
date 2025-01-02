import { App, Page } from 'konsta/react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router';
import Navbar from 'src/components/navbar';
import AppRouter from 'src/router/AppRouter';

function MyApp() {
  // States
  const [options] = useState({ platform: 'ios' as const, theme: 'dark' });

  // Renders
  return (
    <BrowserRouter>
      <App safeAreas theme={options.platform} dark={!!options.theme}>
        <Page>
          <AppRouter />
          <Navbar />
        </Page>
      </App>
    </BrowserRouter>
  );
}

export default MyApp;
