import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  mobileNumber: Yup.string()
    .matches(
      /^[0-9]*$/,
      'Please enter a valid mobile number with only digits (no spaces or special characters)'
    )
    .min(10, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  postalCode: Yup.string()
    .matches(/^[0-9]*$/, 'Postal code must contain only digits')
    .min(4, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  country: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

export default validationSchema;
