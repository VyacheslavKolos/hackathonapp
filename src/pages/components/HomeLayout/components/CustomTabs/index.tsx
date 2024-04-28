import { SyntheticEvent, useState } from 'react';
import { Box, Divider, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Routes from '../../../../../hooks/router/routes.enum.ts';

const CustomTabs = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: theme.palette.primary.main,
              height: 4,
            },
          }}
        >
          <Tab
            onClick={() => {
              navigate(Routes.Ads);
            }}
            label={
              <Typography
                variant="h5"
                fontWeight={600}
                color={theme.palette.common.black}
                textTransform="none"
              >
                Переглянуті оголошення
              </Typography>
            }
          />
          <Divider orientation="vertical" flexItem sx={{ margin: '0px 24px' }} />
          <Tab
            onClick={() => {
              navigate(Routes.Requests);
            }}
            label={
              <Typography
                variant="h5"
                fontWeight={600}
                color={theme.palette.common.black}
                textTransform="none"
              >
                Прийняті запити
              </Typography>
            }
          />
          <Divider orientation="vertical" flexItem sx={{ margin: '0px 24px' }} />
          <Tab
            onClick={() => {
              navigate(Routes.ManageProfile);
            }}
            label={
              <Typography
                variant="h5"
                fontWeight={600}
                color={theme.palette.common.black}
                textTransform="none"
              >
                Керування аккаунтом
              </Typography>
            }
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default CustomTabs;
