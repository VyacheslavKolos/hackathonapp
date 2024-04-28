import { FormControlLabel, Radio, RadioGroup, SxProps } from '@mui/material';
import { forwardRef } from 'react';

export type RadioPropsType = {
  name: string;
  label?: string;
  InputProps?: any;
  sx?: SxProps;
};

const RadioButtons = forwardRef<RadioPropsType, RadioPropsType>(({ ...props }, ref) => (
  <RadioGroup ref={ref as any} {...props} row>
    <FormControlLabel
      value="true"
      control={<Radio />}
      label="Надаю допомогу"
      sx={{
        '& .MuiFormControlLabel-label': {
          color: '#000',
        },
      }}
    />
    <FormControlLabel
      value="false"
      control={<Radio />}
      label="Потребую допомоги"
      sx={{
        '& .MuiFormControlLabel-label': {
          color: '#000',
        },
      }}
    />
  </RadioGroup>
));

export default RadioButtons;
