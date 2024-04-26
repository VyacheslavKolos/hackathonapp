import { SxProps, TextField } from '@mui/material';
import { forwardRef } from 'react';

export type InputPropsType = {
  name: string;
  helperText?: string;
  label?: string;
  error?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  InputProps?: any;
  sx?: SxProps;
};

const TextInput = forwardRef<InputPropsType, InputPropsType>(({ ...props }, ref) => (
  <TextField
    ref={ref as any}
    variant="outlined"
    // onChange={(event) => {
    //   setFieldValues({ ...fieldValues, jobPosition: event.target.value });
    // }}
    {...props}
  />
));

export default TextInput;
