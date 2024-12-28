import { App, Block, Button, Navbar, Page } from 'konsta/react';

function MyApp() {
  return (
    <App safeAreas theme="ios">
      <Page>
        <Navbar title="My App" />
        <Block>
          <p>Here comes my app</p>
        </Block>
        <Button color="orange">Click me</Button>
      </Page>
    </App>
  );
}

export default MyApp;
