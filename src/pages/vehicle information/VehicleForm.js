import { Grid, Typography } from '@mui/material';
import React from 'react';
import TextAreaTextField from '../../components/commonComponents/TextAreaTextField';
import TextFieldWithLabel from '../../components/commonComponents/TextTypeTextField';
import vehicleFields from './vehicleData';

const renderField = (field) => {
  const { type, placeholder, rows } = field;
  switch (type) {
    case 'text':
      return <TextFieldWithLabel placeholder={placeholder} />;

    case 'textArea':
      return <TextAreaTextField placeholder={placeholder} rows={rows} />;

    default:
      return null;
  }
};

const VehicleForm = () => {
  return (
    <>
      {vehicleFields.map((field) => (
        <Grid container key={field.id} sx={{ marginBottom: '.5rem' }}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom sx={{ color: `#4c4d4d` }}>
              {field.label}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {renderField(field)}
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default VehicleForm;
