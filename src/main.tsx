import { retrieveLaunchParams } from '@telegram-apps/sdk-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import EnvUnsupported from './components/errors/EnvUnsupported.tsx';
import { ErrorBoundary } from './components/errors/ErrorBoundary.tsx';
import ErrorBoundaryError from './components/errors/ErrorBoundaryError.tsx';
import { init } from './init.ts';
import './mocks/mock-telegram-env.ts';

const root = createRoot(document.getElementById('root')!);

try {
  init(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV);

  root.render(
    <StrictMode>
      <ErrorBoundary fallback={ErrorBoundaryError}>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
} catch (error) {
  console.error(error);
  root.render(<EnvUnsupported />);
}
