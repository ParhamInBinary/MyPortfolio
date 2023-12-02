import { HexagonOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

export const ThreeHexagons = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0',
        gap: '10px',
      }}
    >
      <HexagonOutlined sx={{ transform: 'rotate(30deg)' }} />
      <HexagonOutlined sx={{ transform: 'rotate(30deg)' }} />
      <HexagonOutlined sx={{ transform: 'rotate(30deg)' }} />
    </Box>
  );
};
