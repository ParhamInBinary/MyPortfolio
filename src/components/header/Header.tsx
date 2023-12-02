import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { homeStrings } from '../../assets/strings';
import { HeaderContainer } from './styles';

export const Header = () => {
  const { home, projects, aboutMe, resume, contact } = homeStrings.header;
  const headerOptions = [home, projects, aboutMe, resume, contact];

  return (
    <HeaderContainer>
      {headerOptions.map((option, index: number) => (
        <NavLink
          key={index}
          to={`${option.url}`}
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? 'underline' : 'none',
              color: '#FFF',
            };
          }}
        >
          <Typography variant="h6">{option.displayName}</Typography>
        </NavLink>
      ))}
    </HeaderContainer>
  );
};
