import { Box } from '@mui/material';

import { OpacityBG } from './styles';

export const AboutMePage = () => {
  return (
    <>
      <OpacityBG />
      <Box display="flex" marginLeft="10em">
        <Box
          sx={{
            position: 'relative',
            height: '150px',
            width: '150px',
            background: 'blue',
            clipPath:
              'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: '10px',
              left: '10px',
              height: 'calc(100%-20px)',
              width: 'calc(100%-20px)',
              clipPath:
                'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
              background: 'red',
              //   background: `${image}`,
            },
          }}
        >
          asd
        </Box>
      </Box>
    </>
  );
};
