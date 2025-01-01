import { Block } from 'konsta/react';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

const ReportsScreen = () => {
  return (
    <div className="h-full">
      <Block>
        <ScreenTitle title="Reports" />
      </Block>

      <div className="h-[300px]">
        <Example3 />
      </div>

      <div className="h-[300px]">
        <Example2 />
      </div>

      <div className="h-[300px]">
        <Example1 />
      </div>
    </div>
  );
};

export default ReportsScreen;
