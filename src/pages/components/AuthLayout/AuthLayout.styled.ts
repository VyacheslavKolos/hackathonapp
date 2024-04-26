import { styled } from '@mui/system';
import { Container } from '@mui/material';

export const StyledContainer = styled(Container)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledImage = styled('img')(({ theme }) => ({
  maxHeight: 700,
  borderRadius: 30,
  border: `3px solid ${theme.palette.common.black}`,
  maxWidth: '616px',
}));
