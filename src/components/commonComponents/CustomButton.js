import { Button } from '@mui/material';
import React from 'react';
const CustomButton = (props) => {
  const { variant, text } = props;
  return (
    <Button
      variant={variant}
      sx={{
        my: '1rem',
        width: '95%',
        height: '2rem',
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: (theme) => theme.palette.authPrimary.main,
        textTransform: 'uppercase',

        ':hover': {
          bgcolor: (theme) => theme.palette.authPrimary.light,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
