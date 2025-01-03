import Page from 'src/components/Page';
import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

const ReportsScreen = () => {
  return (
    <Page>
      <ScreenHeader>
        <ScreenTitle title="Reports" />
      </ScreenHeader>

      <div style={{ height: 300 }}>
        <Example3 />
      </div>

      <div style={{ height: 300 }}>
        <Example2 />
      </div>

      <div style={{ height: 300 }}>
        <Example1 />
      </div>
    </Page>
  );
};

export default ReportsScreen;
