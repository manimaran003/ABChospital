import React from 'react';
import InputComponent from './InputComponent';
import SelectComponent from './SelectComponent';
import { TextFieldProps } from '@mui/material';

interface FieldProps {
  label: string;
  name: string;
  type: string;
  onChange: () => void;
  error: string;
  helperText: string;
  test: string;
  value: string;
  control: string;
}

const FormikControl: React.FC<FieldProps | TextFieldProps | any> = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <InputComponent {...rest} />;
    case 'select':
      return <SelectComponent {...rest} />;
    default:
      return null;
  }
};
export default FormikControl;
