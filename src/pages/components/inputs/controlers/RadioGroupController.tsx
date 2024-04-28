import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import RadioButtons, { RadioPropsType } from '../core/RadioGroup.tsx';

type Props = RadioPropsType;
const RadioGroupController: FC<Props> = ({
  name = 'radio',
  // onChange,
  // onBlur,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ...fieldProps } }) => (
        <RadioButtons
          {...fieldProps}
          // onChange={(e: any) => {
          //   fieldProps.onChange(e);
          // }}
          // onBlur={() => {
          //   fieldProps.onBlur();
          // }}
          {...props}
        />
      )}
    />
  );
};

export default RadioGroupController;
