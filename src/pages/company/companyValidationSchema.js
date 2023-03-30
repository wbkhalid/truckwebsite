import * as Yup from 'yup';
const phoneNumberRegExp = /^(?:\+92|0)(?:(3\d{2}))?(\d{7})$/;

const companyvalidationSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  mobileNumber: Yup.string()
    .matches(phoneNumberRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
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

export default companyvalidationSchema;
