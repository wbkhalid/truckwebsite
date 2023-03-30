import { TextField } from '@mui/material';

const TextTypeTextField = ({
  name,
  values = {}, 
  handleChange,
  handleBlur,
  touched = {}, 
  errors = {}, 
  placeholder = '', 
  width, 
}) => {
  return (
    <TextField
      fullWidth
      variant="filled"
      name={name}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched[name] && Boolean(errors[name])}
      placeholder={placeholder}
      sx={{
        width
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
  );
};

export default TextTypeTextField;
