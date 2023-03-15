import {  Stack, Typography } from '@mui/material';

import React from 'react';

const CustomIconText = (props) => {
  const { icon, text } = props;
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={.5}
      sx={{
        color: (theme) => theme.palette.authPrimary.main,
      }}
    >
      {icon}
      <Typography variant="subtitle2">{text}</Typography>
    </Stack>
  );
};

export default CustomIconText;
