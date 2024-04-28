import { FC } from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledImage } from './HomeLayout.styled.ts';
import Header from './components/Header';
// @ts-ignore
import StepanImg from '../../../assets/images/stepan.png';
import CustomTabs from './components/CustomTabs';
import { useGetUserInfoQuery } from '../../../redux/api/generalApiSlice.ts';
import { UserType } from '../../../constants/types.ts';

const HomeLayout: FC = () => {
  const theme = useTheme();

  const { data = {} as UserType } = useGetUserInfoQuery(undefined, {
    refetchOnFocus: true,
  });

  const { first_name: firstName, last_name: lastName, email, helper } = data;

  return (
    <Box bgcolor={theme.palette.background.paper}>
      <StyledContainer maxWidth="xl">
        <Header userName={firstName} helper={helper} />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="8px"
          marginTop="51px"
          marginBottom="32px"
        >
          <StyledImage src={StepanImg} alt="stepan" />
          <Typography variant="h3" color={theme.palette.common.black}>
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography variant="h5" color={theme.palette.common.white}>
            {email}
          </Typography>
        </Box>

        <Box
          padding="16px 24px"
          sx={{ borderRadius: '12px', boxShadow: '0px 4px 16px 0px rgba(17, 34, 17, 0.05)' }}
          display="flex"
          justifyContent="center"
        >
          <CustomTabs />
        </Box>

        <Box>
          <Outlet />
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default HomeLayout;
