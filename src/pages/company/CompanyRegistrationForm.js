import { useFormik } from 'formik';
import { Grid, Typography, Stack } from '@mui/material';
import companyValidationSchema from './companyValidationSchema';
import CustomButton from '../../components/commonComponents/CompanyButton';
import TextTypeTextField from '../../components/commonComponents/TextTypeTextField';
import comapnyFormFields from './companyFormFields';

const initialValues = {
  companyName: '',
  email: '',
  mobileNumber: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
};

const CompanyRegistrationForm = () => {
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
    validationSchema: companyValidationSchema,
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
      {comapnyFormFields.map(({ name, label, placeholder }) => (
        <Grid container key={name} alignItems="center" sx={{ mt: '.5rem' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#4c4d4d' }}>
              {label}
            </Typography>
          </Grid>
          <Grid item xs={12} sm>
            <TextTypeTextField
              name={name}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder={placeholder}
              width="30%"
            />
            {errors[name] && touched[name] && (
              <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                {errors[name]}
              </Typography>
            )}
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

export default CompanyRegistrationForm;
