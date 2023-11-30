import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { homeStrings } from '../../assets/strings';
import { HeaderContainer } from './styles';

export const Header = () => {
  const { header } = homeStrings;
  const headerOptions: string[] = [
    header.home,
    header.projects,
    header.aboutMe,
    header.resume,
    header.contact,
  ];

  return (
    <HeaderContainer>
      {headerOptions.map((option: string, index: number) => (
        <NavLink
          key={index}
          to={`/${option.toLocaleLowerCase()}`}
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? 'underline' : 'none',
              color: '#FFF',
            };
          }}
        >
          <Typography variant="h6">{option}</Typography>
        </NavLink>
      ))}
    </HeaderContainer>
  );
};
