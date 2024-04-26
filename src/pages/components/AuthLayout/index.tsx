import { FC, ReactNode } from 'react';

import { Box } from '@mui/material';
// @ts-ignore
import AuthImg from '../../../assets/images/auth-image.png';
// @ts-ignore
import Logo from '../../../assets/images/needz-logo.png';
import { StyledContainer, StyledImage } from './AuthLayout.styled.ts';

type Props = {
  isReversed?: boolean;
  imgWidth?: number;
  children: ReactNode;
};

const AuthLayout: FC<Props> = ({ isReversed = false, imgWidth, children }) => (
  <StyledContainer maxWidth="lg">
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: isReversed ? 'row-reverse' : 'row',
      }}
    >
      <StyledImage src={AuthImg} alt="authimg" width={imgWidth} />
      <Box>
        <img src={Logo} alt="logo" />

        {children}
      </Box>
    </Box>
  </StyledContainer>
);

export default AuthLayout;
