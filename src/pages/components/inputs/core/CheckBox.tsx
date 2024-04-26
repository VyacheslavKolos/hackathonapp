import { Checkbox } from '@mui/material';
import { forwardRef } from 'react';
import { InputPropsType } from './TextInput.tsx';

export type CheckBoxType = Omit<InputPropsType, 'multiline | rows | fullWidth'>;

const CheckBox = forwardRef<CheckBoxType, CheckBoxType>(({ ...props }, ref) => (
  <Checkbox
    ref={ref as any}
    // onChange={(event) => {
    //   setFieldValues({ ...fieldValues, jobPosition: event.target.value });
    // }}
    {...props}
  />
));

export default CheckBox;
