import { Typography } from '@mui/material';

import { homeStrings } from '../../../../assets/strings';
import { NameBox, RoleBox, SubContainer } from './styles';

export const SubContainerComponent = () => {
  const { name, role } = homeStrings;
  return (
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
  );
};
