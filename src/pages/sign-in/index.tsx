import { FC } from 'react';
import { Box, Button, InputAdornment, Link, Typography, useTheme } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import AuthLayout from '../components/AuthLayout';
import TextFieldController from '../components/inputs/controlers/TextFieldController.tsx';
import PasswordFieldController from '../components/inputs/controlers/PasswordFieldController.tsx';
import Routes from '../../hooks/router/routes.enum.ts';
import CheckBoxController from '../components/inputs/controlers/CheckBoxController.tsx';

const SignInPage: FC = () => {
  const theme = useTheme();

  const form = useForm({
    mode: 'onChange',
  });

  return (
    <AuthLayout imgWidth={490}>
      <Box sx={{ marginTop: '32px' }}>
        <FormProvider {...form}>
          <Typography variant="h1" color={theme.palette.primary.main}>
            Зареєструватися
          </Typography>
          <Typography
            variant="h5"
            color={theme.palette.text.secondary}
            sx={{ marginTop: '16px', marginBottom: '48px' }}
          >
            Введіть необхідні дані, щоб отримати доступ до свого облікового запису
          </Typography>

          <Box display="flex" flexDirection="column" gap="24px">
            <Box display="flex" gap="24px">
              <TextFieldController name="name" label="Ім'я" fullWidth />
              <TextFieldController name="surname" label="Прізвище" fullWidth />
            </Box>

            <Box display="flex" gap="24px">
              <TextFieldController name="email" label="Електронна пошта" fullWidth />
              <TextFieldController
                name="phone"
                label="Номер телефону"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography color="#000">+380</Typography>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <PasswordFieldController name="password" label="Пароль" fullWidth />
            <PasswordFieldController name="confirm_password" label="Підтвердьте пароль" fullWidth />

            <Box display="flex" gap="8px" alignItems="center">
              <CheckBoxController name="privacy" />
              <Typography
                variant="h6"
                color={theme.palette.common.black}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                Я погоджуюся з усіма&nbsp;
                <Typography variant="h6" fontWeight={600}>
                  Умовами&nbsp;
                </Typography>
                та&nbsp;
                <Typography variant="h6" fontWeight={600}>
                  Політикою конфіденційності
                </Typography>
              </Typography>
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
              Створити акаунт
            </Typography>
          </Button>

          <Link href={Routes.Login} sx={{ textDecoration: 'none' }}>
            <Box display="flex" justifyContent="center">
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                Вже є аккаунт?&nbsp;
                <Typography variant="h6" fontWeight={600}>
                  Увійти
                </Typography>
              </Typography>
            </Box>
          </Link>
        </FormProvider>
      </Box>
    </AuthLayout>
  );
};

export default SignInPage;
