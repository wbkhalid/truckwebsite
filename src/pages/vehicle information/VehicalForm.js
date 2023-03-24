import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const VehicalForm = () => {
  const vehicleData = [
    {
      id: 'vehicleType',
      fieldName: 'Vehicle Type',
      placeHolder: 'Vehicle Type',
    },
    {
      id: 'vehicleWeight',
      fieldName: 'Vehicle Weight',
      placeHolder: 'Vehicle Weight',
    },
    {
      id: 'startandEndTime',
      fieldName: 'Start and End Time',
      placeHolder: 'Start and End Time',
    },
    {
      id: 'startLocationName',
      fieldName: 'Start Location Name',
      placeHolder: 'Start Location Name',
    },
    {
      id: 'endLocationName',
      fieldName: 'End Location Name',
      placeHolder: 'End Location Name',
    },
    {
      id: 'stop',
      fieldName: 'Stop',
      placeHolder: 'Stop',
      multiline: true,
      rows: 4,
    },
  ];

  return (
    <>
      {vehicleData.map((data) => (
        <Grid container sx={{ mt: '.5rem' }} key={data.id}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom sx={{ color: '#4c4d4d' }}>
              {data.fieldName}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              placeholder={data.placeHolder}
              variant="outlined"
              multiline={data.multiline}
              rows={data.rows}
              color="authPrimary"
              InputProps={{
                sx: {
                  height: data.multiline ? 'auto' : 40,
                  fontSize: '.9rem',
                  bgcolor: '#fff',
                },
              }}
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default VehicalForm;
