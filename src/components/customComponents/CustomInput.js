import { TextField } from '@mui/material';
import React from 'react';

const CustomInput = (props) => {
  const { placeholder, type, variant } = props;

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      type={type}
      variant={variant}
      color="authPrimary"
      InputProps={{ sx: { height: 30, fontSize: '.8rem', mb: '.5rem' } }}
    />
  );
};

export default CustomInput;
