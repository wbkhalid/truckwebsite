import { useFormik } from 'formik';
import { TextField, Grid, Typography, Stack, MenuItem } from '@mui/material';

import CustomButton from '../../components/commonComponents/CompanyButton';
import tripFields from './tripFields';


const initialValues = {
  tripName: '',
  email: '',
  mobileNumber: '',
  productName: '',
  weightSize: '',
  vehicleType: '',
  driverLicense: '',
  state: '',
  driverLicenseIssueDate: '',
  driverLicenseExpiryDate: '',
  startLocation: '',
  endLocation: '',
};

const TripRegistrationForm = () => {
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
      {tripFields.map(({ name, label, placeholder, type, options }) => (
        <Grid container key={name} alignItems="center" sx={{ mt: '.5rem' }}>
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
              select={type === 'select'}
              SelectProps={{
                displayEmpty: true,
                renderValue: (value) => (value ? value : placeholder),
              }}
              {...(type === 'select' && { options })}
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
            >
              {options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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

export default TripRegistrationForm;
