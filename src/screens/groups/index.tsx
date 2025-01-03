import { Button, List } from '@telegram-apps/telegram-ui';
import { NavLink } from 'react-router';
import Page from 'src/components/Page';
import ScreenTitle from 'src/components/UI/typography/ScreenTitle';
import { mockGroups } from 'src/mocks/mock-groups';
import GroupItem from './components/GroupItem';

const GroupsScreen = () => {
  const renderGroups = () => {
    return mockGroups?.map((group) => <GroupItem key={group.name} group={group} />);
  };

  return (
    <Page back={false}>
      <List style={{ background: 'var(--tgui--secondary_bg_color)' }}>
        <div className="flex items-center justify-between mb-2">
          <ScreenTitle title="Groups" />
          <NavLink to="/groups/add">
            <Button mode="filled" size="s">
              Add group
            </Button>
          </NavLink>
        </div>

        <div className="flex flex-col gap-2 py-2">{renderGroups()}</div>
      </List>
    </Page>
  );
};

export default GroupsScreen;
