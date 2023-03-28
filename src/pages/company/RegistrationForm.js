import { useFormik } from 'formik';
import { TextField, Grid, Typography, Stack } from '@mui/material';
import validationSchema from './validationSchema';
import CustomButton from './CompanyButton';
import formFields from './formFields';

const initialValues = {
  companyName: '',
  email: '',
  mobileNumber: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
};

const RegistrationForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  const handleCancelClick = () => {
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ name, label, placeholder, id }) => (
        <Grid container key={id} sx={{ mt: '.5rem' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#4c4d4d' }}>
              {label}
            </Typography>
          </Grid>
          <Grid item xs={12} sm>
            <TextField
              variant="filled"
              name={name}
              value={values[name]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched[name] && Boolean(errors[name])}
              placeholder={placeholder}
              sx={{
                width: '30%',
              }}
              InputProps={{
                sx: {
                  padding: 0,
                  height: 40,
                  borderRadius: '.5rem',
                  backgroundColor: '#fff',
                },
                disableUnderline: true,
              }}
            />
            {errors[name] && touched[name] ? (
              <p style={{ color: 'red' }}>{errors[name]}</p>
            ) : null}
          </Grid>
        </Grid>
      ))}

      <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        sx={{ mt: '3rem' }}
      >
        <CustomButton text="Cancel" onClick={handleCancelClick} />
        <CustomButton text="Save" type="submit" />
      </Stack>
    </form>
  );
};

export default RegistrationForm;
