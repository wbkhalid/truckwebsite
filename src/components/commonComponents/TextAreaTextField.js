import { TextField } from '@mui/material';
const TextAreaTextField = (props) => {
  return (
    <TextField
      fullWidth
      placeholder={props.placeholder}
      variant="filled"
      multiline
      rows={props.rows}
      color="authPrimary"
      sx={{
        width: props.width,
      }}
      InputProps={{
        sx: {
          height: 'auto',
          fontSize: '.9rem',
          bgcolor: '#fff',
        },
        disableUnderline: true,
      }}
    />
  );
};

export default TextAreaTextField;
