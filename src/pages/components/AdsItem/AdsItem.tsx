import { Box, Button, Typography, useTheme } from '@mui/material';

const AdsItem = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      gap="55px"
      padding="29px 40px"
      bgcolor={theme.palette.secondary.light}
      borderRadius="20px"
    >
      <img
        src="https://iboom.store/image/catalog/apple/iphone-card-40-iphone15prohero-202309_FMT_WHH.jpeg"
        alt="phone"
        width={319}
        height={213}
      />
      <Box display="flex" flexDirection="column" justifyContent="space-between" width="100%">
        <Typography variant="h3" color={theme.palette.common.black}>
          Потрібна допомога з налаштуванням б/в телефону. Iphone 13 pro
        </Typography>
        <Typography variant="h5" color={theme.palette.text.disabled}>
          Потрібна допомога з налаштуванням б/в телефону. Iphone 13 pro
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" color={theme.palette.text.primary}>
            25 квітня 2024 року
          </Typography>
          <Button
            sx={{ height: '49px', bgcolor: theme.palette.background.default, padding: '14px' }}
          >
            Кнопка
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdsItem;
