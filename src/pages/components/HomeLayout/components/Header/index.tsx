import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';
// @ts-ignore
import Logo from '../../../../../assets/images/needz-logo.png';
import useLogout from '../../../../../hooks/useLogout.ts';

type Props = {
  userName: string;
};
const Header: FC<Props> = ({ userName = 'user name' }) => {
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
