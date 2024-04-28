import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
// @ts-ignore
import Logo from '../../../../../assets/images/needz-logo.png';
import useLogout from '../../../../../hooks/useLogout.ts';

type Props = {
  userName: string;
  helper: boolean;
};
const Header: FC<Props> = ({ userName = 'user name', helper }) => {
  const theme = useTheme();
  const [logout] = useLogout();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <img src={Logo} alt="logo" />
      <Box display="flex" alignItems="center">
        {!helper && (
          <Button
            startIcon={<ControlPointOutlinedIcon />}
            onClick={logout}
            sx={{ height: '53px', padding: '18px 15px', border: '1px solid #000', mr: '40px' }}
          >
            ДОДАТИ НОВИЙ ЗАПИТ ПРО ДОПОМОГУ
          </Button>
        )}
        <Typography variant="h5" color={theme.palette.common.white}>
          {userName}
        </Typography>
        <IconButton>
          <MenuIcon sx={{ color: theme.palette.primary.main, width: 26, height: 26 }} />
        </IconButton>
        <Button onClick={logout}>Logout</Button>
      </Box>
    </Box>
  );
};

export default Header;
