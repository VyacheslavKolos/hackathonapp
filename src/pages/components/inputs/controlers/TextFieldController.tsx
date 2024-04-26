import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextInput, { InputPropsType } from '../core/TextInput.tsx';

type Props = InputPropsType;
const TextFieldController: FC<Props> = ({
  name = 'field',
  helperText,
  // onChange,
  // onBlur,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ...fieldProps }, fieldState: { error, isTouched } }) => (
        <TextInput
          {...fieldProps}
          // onChange={(e: any) => {
          //   fieldProps.onChange(e);
          // }}
          // onBlur={() => {
          //   fieldProps.onBlur();
          // }}
          {...props}
          error={isTouched && !!error?.message}
          // helperText={(isTouched && error?.message?.key) || helperText}
          helperText={(isTouched && !!error?.message && 'Format error message here') || helperText}
        />
      )}
    />
  );
};

export default TextFieldController;
