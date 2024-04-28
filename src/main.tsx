import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import App from './App.tsx';
import './index.css';
import { store } from './redux/store.ts';
import SnackbarCloseButton from './pages/components/SnackBarCloseButton/SnackBarCloseButton.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
);
