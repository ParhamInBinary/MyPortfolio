import { Box, Typography } from '@mui/material';

import { homeStrings } from '../assets/strings';
import {
  Container,
  NameBox,
  RoleBox,
  SloganContainer,
  SubContainer,
} from '../components';

export const HomePage = () => {
  const { name, role, slogan } = homeStrings;
  return (
    <Container>
      <SubContainer>
        <NameBox>
          <Typography variant="body1">{name.firstname}</Typography>
          <Typography variant="body2">{name.lastname}</Typography>
        </NameBox>

        <RoleBox>
          <Typography variant="body1">{role.firstHalf}</Typography>
          <Typography variant="body2">{role.secondHalf}</Typography>
        </RoleBox>
      </SubContainer>

      <SloganContainer>
        <Typography variant="subtitle1">{slogan.title}</Typography>
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Typography variant="subtitle2">{slogan.subtitleRegular}</Typography>
          <Typography variant="caption">{slogan.subtitleStyled}</Typography>
        </Box>
      </SloganContainer>
    </Container>
  );
};
