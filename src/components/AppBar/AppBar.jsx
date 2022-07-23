import { UserMenu } from '../UserMenu/UserMenu';
import { SideBarContainer } from './AppBar.styled'

export const AppBar = ({ user }) => {
  return (
    <SideBarContainer>
      <UserMenu user={user} />
    </SideBarContainer>
  );
};