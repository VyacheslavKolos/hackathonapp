import { FC } from 'react';
import { Box, CircularProgress, Link, Typography, useTheme } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocalStorage } from 'usehooks-ts';

import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import TextFieldController from '../components/inputs/controlers/TextFieldController.tsx';
import PasswordFieldController from '../components/inputs/controlers/PasswordFieldController.tsx';
import Routes from '../../hooks/router/routes.enum.ts';
import CheckBoxController from '../components/inputs/controlers/CheckBoxController.tsx';
import { SignUpStyledButton, TypographyAlignedCenter } from '../sign-up/SignUp.styled.tsx';
import { useLoginMutation } from '../../redux/api/authApiSlice.ts';
import useCustomSnackbar from '../../hooks/useCustomSnackbar.ts';
import { handleApiError } from '../../constants/heplerFunctions.ts';

const LogInPage: FC = () => {
  const theme = useTheme();
  const { callSnackbar } = useCustomSnackbar();
  const navigate = useNavigate();
  const [, setTokens] = useLocalStorage('tokens', '');

  const form = useForm({
    mode: 'onChange',
  });

  const { getValues } = form;

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async () => {
    try {
      const credentials = getValues();
      delete credentials.privacy;
      const userData = await login(credentials).unwrap();
      setTokens({ ...userData });
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
            <TextFieldController name="username" label="Електронна пошта" fullWidth />
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

          <SignUpStyledButton fullWidth onClick={handleSubmit}>
            <Typography
              variant="h6"
              color={theme.palette.common.black}
              sx={{ fontWeight: 600, textTransform: 'none' }}
            >
              Вхід
            </Typography>
          </SignUpStyledButton>

          <Link href={Routes.SignUp} sx={{ textDecoration: 'none' }}>
            <Box display="flex" justifyContent="center">
              <TypographyAlignedCenter variant="h6" color={theme.palette.primary.main}>
                Немає облікового запису?&nbsp;
                <Typography variant="h6" fontWeight={600}>
                  Зареєструватися
                </Typography>
              </TypographyAlignedCenter>
            </Box>
          </Link>
        </FormProvider>
      </Box>
    </AuthLayout>
  );
};

export default LogInPage;
