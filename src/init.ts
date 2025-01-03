import {
  $debug,
  backButton,
  closingBehavior,
  initData,
  init as initSDK,
  miniApp,
  themeParams,
  viewport,
} from '@telegram-apps/sdk-react';

const init = (debug: boolean) => {
  // Set @telegram-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK();

  // Add Eruda if needed.
  // if (debug) {
  //   import('eruda').then((lib) => lib.default.init()).catch(console.error);
  // }

  // Check if all required components are supported.
  if (!backButton.isSupported() || !miniApp.isSupported()) {
    throw new Error('ERR_NOT_SUPPORTED');
  }

  if (closingBehavior.enableConfirmation.isAvailable()) {
    closingBehavior.enableConfirmation();
    closingBehavior.isConfirmationEnabled(); // true
  }

  if (closingBehavior.mount.isAvailable()) {
    closingBehavior.mount();
    closingBehavior.isMounted(); // true
  }

  // Mount all components used in the project.
  backButton.mount();
  miniApp.mount();
  themeParams.mount();
  initData.restore();

  try {
    viewport
      .mount()
      .catch((e) => {
        console.error('Something went wrong mounting the viewport', e);
      })
      .then(() => {
        viewport.bindCssVars();
      });
  } catch (error) {
    console.error(error);
  }

  // Define components-related CSS variables.
  miniApp.bindCssVars();
  themeParams.bindCssVars();
};

export default init;
