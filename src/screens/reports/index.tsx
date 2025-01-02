import ScreenHeader from 'src/components/UI/ScreenHeader';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

const ReportsScreen = () => {
  return (
    <>
      <ScreenHeader>
        <ScreenTitle title="Reports" />
      </ScreenHeader>

      <div className="h-[300px]">
        <Example3 />
      </div>

      <div className="h-[300px]">
        <Example2 />
      </div>

      <div className="h-[300px]">
        <Example1 />
      </div>
    </>
  );
};

export default ReportsScreen;
