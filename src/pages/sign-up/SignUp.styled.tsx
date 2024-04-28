import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';

export const TypographyAlignedCenter = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
});

export const SignUpStyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  marginTop: '40px',
  marginBottom: '16px',
  height: '48px',
}));
