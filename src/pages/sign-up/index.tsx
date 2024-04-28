import { FC } from 'react';
import { Box, CircularProgress, InputAdornment, Link, Typography, useTheme } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import AuthLayout from '../components/AuthLayout';
import TextFieldController from '../components/inputs/controlers/TextFieldController.tsx';
import PasswordFieldController from '../components/inputs/controlers/PasswordFieldController.tsx';
import Routes from '../../hooks/router/routes.enum.ts';
import CheckBoxController from '../components/inputs/controlers/CheckBoxController.tsx';
import { SignUpStyledButton, TypographyAlignedCenter } from './SignUp.styled.tsx';
import { useRegistrationMutation } from '../../redux/api/authApiSlice.ts';
import { handleApiError } from '../../constants/heplerFunctions.ts';
import useCustomSnackbar from '../../hooks/useCustomSnackbar.ts';
import RadioGroupController from '../components/inputs/controlers/RadioGroupController.tsx';

const SignInPage: FC = () => {
  const form = useForm({
    mode: 'onChange',
  });
  const theme = useTheme();
  const navigate = useNavigate();
  const { callSnackbar } = useCustomSnackbar();
  const [, setTokens] = useLocalStorage('tokens', '');

  const [register, { isLoading }] = useRegistrationMutation();

  const { getValues } = form;

  const handleRegister = async () => {
    try {
      let userData = getValues();
      delete userData.privacy;
      userData = { ...userData, username: userData.email };
      const tokens = await register(userData).unwrap();
      setTokens({ ...tokens });
      navigate(Routes.Home);
    } catch (err) {
      callSnackbar(handleApiError(err as any), 'error');
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
      >
        <CircularProgress size={200} />
      </Box>
    );
  }

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
            sx={{ marginTop: '16px', marginBottom: '16px' }}
          >
            Введіть необхідні дані, щоб отримати доступ до свого облікового запису
          </Typography>

          <Box display="flex" flexDirection="column" gap="24px">
            <Box display="flex" gap="24px">
              <TextFieldController name="first_name" label="Ім'я" fullWidth />
              <TextFieldController name="last_name" label="Прізвище" fullWidth />
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
            <PasswordFieldController
              name="confirmed_password"
              label="Підтвердьте пароль"
              fullWidth
            />

            <Box display="flex" gap="10px" alignItems="center">
              <Typography variant="h3" color={theme.palette.common.black}>
                Я:
              </Typography>
              <RadioGroupController name="helper" />
            </Box>

            <Box display="flex" gap="8px" alignItems="center">
              <CheckBoxController name="privacy" />
              <TypographyAlignedCenter variant="h6" color={theme.palette.common.black}>
                Я погоджуюся з усіма&nbsp;
                <Typography variant="h6" fontWeight={600}>
                  Умовами&nbsp;
                </Typography>
                та&nbsp;
                <Typography variant="h6" fontWeight={600}>
                  Політикою конфіденційності
                </Typography>
              </TypographyAlignedCenter>
            </Box>
          </Box>

          <SignUpStyledButton fullWidth onClick={handleRegister}>
            <Typography
              variant="h6"
              color={theme.palette.common.black}
              sx={{ fontWeight: 600, textTransform: 'none' }}
            >
              Створити акаунт
            </Typography>
          </SignUpStyledButton>

          <Link href={Routes.Login} sx={{ textDecoration: 'none' }}>
            <Box display="flex" justifyContent="center">
              <TypographyAlignedCenter variant="h6" color={theme.palette.primary.main}>
                Вже є аккаунт?&nbsp;
                <Typography variant="h6" fontWeight={600}>
                  Увійти
                </Typography>
              </TypographyAlignedCenter>
            </Box>
          </Link>
        </FormProvider>
      </Box>
    </AuthLayout>
  );
};

export default SignInPage;
