import { Typography } from '@mui/material';

import { homeStrings } from '../../assets/strings';
import { HeaderContainer } from './styles';

export const Header = () => {
  const headerOptions: string[] = [
    homeStrings.header.home,
    homeStrings.header.projects,
    homeStrings.header.aboutMe,
    homeStrings.header.resume,
    homeStrings.header.contact,
  ];

  return (
    <HeaderContainer>
      {headerOptions.map((option: string, index: number) => (
        <Typography variant='h3' key={index}>{option}</Typography>
      ))}
    </HeaderContainer>
  );
};
