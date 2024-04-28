export type SnackbarTypes = 'default' | 'error' | 'success' | 'warning' | 'info' | undefined;

export type UserType = {
  first_name: string;
  last_name: string;
  phone: string;
  username: string;
  email: string;
  password: string;
  confirmed_password: string;
  helper: boolean;
};
