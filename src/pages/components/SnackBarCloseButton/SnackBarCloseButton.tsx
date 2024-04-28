import { IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FC } from 'react';

const SnackbarCloseButton: FC<{ snackbarKey: any }> = ({ snackbarKey }) => {
  const { closeSnackbar } = useSnackbar();

  const handleCloseSnackbar = () => {
    closeSnackbar(snackbarKey);
  };

  return (
    <IconButton onClick={handleCloseSnackbar}>
      <CloseOutlinedIcon />
    </IconButton>
  );
};

export default SnackbarCloseButton;
