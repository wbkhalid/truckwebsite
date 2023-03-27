import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

const registrationFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const registrationFormFields = {
  name: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
  email: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
  password: {
    label: 'Password',
    placeholder: 'Enter your password',
  },
  confirmPassword: {
    label: 'Confirm Password',
    placeholder: 'Re-enter your password',
  },
};

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registrationFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, getFieldProps, touched, errors } = formik;

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
      onSubmit={handleSubmit}
    >
      {Object.entries(registrationFormFields).map(([fieldName, fieldConfig]) => (
        <TextField
          key={fieldName}
          variant="outlined"
          fullWidth
          margin="normal"
          {...getFieldProps(fieldName)}
          label={fieldConfig.label}
          placeholder={fieldConfig.placeholder}
          error={touched[fieldName] && Boolean(errors[fieldName])}
          helperText={touched[fieldName] && errors[fieldName]}
        />
      ))}
      <Button variant="contained" color="primary" type="submit">
        Register
      </Button>
    </Box>
  );
};

export default RegistrationForm;