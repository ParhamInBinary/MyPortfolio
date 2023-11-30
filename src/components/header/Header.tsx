import { Typography } from '@mui/material';

import { homeStrings } from '../../assets/strings';
import { HeaderContainer } from './styles';

interface IHeader {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ currentPage, setCurrentPage }: IHeader) => {
  const headerOptions: string[] = [
    homeStrings.header.home,
    homeStrings.header.projects,
    homeStrings.header.aboutMe,
    homeStrings.header.resume,
    homeStrings.header.contact,
  ];

  const handleSwitchPage = (page: string) => {
    if (page === currentPage) return;
    setCurrentPage(page);
  };

  return (
    <HeaderContainer>
      {headerOptions.map((option: string, index: number) => (
        <Typography
          variant="h3"
          key={index}
          onClick={() => handleSwitchPage(option)}
          sx={{
            cursor: 'pointer',
            textDecoration: currentPage === option ? 'underline' : 'none',
          }}
        >
          {option}
        </Typography>
      ))}
    </HeaderContainer>
  );
};
