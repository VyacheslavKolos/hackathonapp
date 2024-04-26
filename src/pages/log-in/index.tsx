import { FC } from 'react';
import { Box, Button, Link, Typography, useTheme } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import AuthLayout from '../components/AuthLayout';
import TextFieldController from '../components/inputs/controlers/TextFieldController.tsx';
import PasswordFieldController from '../components/inputs/controlers/PasswordFieldController.tsx';
import Routes from '../../hooks/router/routes.enum.ts';
import CheckBoxController from '../components/inputs/controlers/CheckBoxController.tsx';

const LogInPage: FC = () => {
  const theme = useTheme();

  const form = useForm({
    mode: 'onChange',
  });

  return (
    <AuthLayout isReversed imgWidth={570}>
      <Box sx={{ marginTop: '59px', width: '512px' }}>
        <FormProvider {...form}>
          <Typography variant="h1" color={theme.palette.primary.main}>
            Вхід
          </Typography>
          <Typography
            variant="h5"
            color={theme.palette.text.secondary}
            sx={{ marginTop: '16px', marginBottom: '48px' }}
          >
            Увійдіть, щоб отримати доступ до свого облікового запису
          </Typography>

          <Box display="flex" flexDirection="column" gap="24px">
            <TextFieldController name="email" label="Електронна пошта" fullWidth />
            <PasswordFieldController name="password" label="Пароль" fullWidth />

            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gap="8px" alignItems="center">
                <CheckBoxController name="privacy" />
                <Typography variant="h6" color={theme.palette.common.black}>
                  Запам&apos;ятати мене
                </Typography>
              </Box>
              <Box>Забули пароль?</Box>
            </Box>
          </Box>

          <Button
            fullWidth
            sx={{
              background: theme.palette.secondary.main,
              marginTop: '40px',
              marginBottom: '16px',
              height: '48px',
            }}
          >
            <Typography
              variant="h6"
              color={theme.palette.common.black}
              sx={{ fontWeight: 600, textTransform: 'none' }}
            >
              Вхід
            </Typography>
          </Button>

          <Link href={Routes.SignUp} sx={{ textDecoration: 'none' }}>
            <Box display="flex" justifyContent="center">
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                Немає облікового запису?&nbsp;
                <Typography variant="h6" fontWeight={600}>
                  Зареєструватися
                </Typography>
              </Typography>
            </Box>
          </Link>
        </FormProvider>
      </Box>
    </AuthLayout>
  );
};

export default LogInPage;
