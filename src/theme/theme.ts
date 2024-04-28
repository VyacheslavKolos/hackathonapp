import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#26239E',
    },
    secondary: {
      main: '#75D2B2',
      light: '#75D2B266',
    },
    text: {
      primary: '#26239E',
      secondary: '#909090',
      disabled: '#898989',
    },
    common: { black: '#000', white: '#363636' },
    background: {
      default: '#FFFFFF',
      paper: '#FAFBFC',
    },
  },

  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 40,
      fontWeight: 600,
    },
    h2: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h3: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 24,
      fontWeight: 600,
    },
    h4: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 18,
    },
    h5: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h6: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1440,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#79747E',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#79747E',
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: 14,
            fontFamily: ['Montserrat', 'sans-serif'].join(','),
            color: '#26239E',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          '& .MuiSvgIcon-root': {
            fontSize: 24,
          },
        },
      },
    },
  },
});

export default theme;
