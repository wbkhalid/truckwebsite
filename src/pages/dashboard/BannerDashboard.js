import { Box, Button, Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

const BannerDashboard = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      // height="15rem"
      sx={{
        mt: '1rem',
        p: '3rem',
        backgroundColor: theme.palette.authPrimary.main,
        borderRadius: '1rem',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={3} sx={{ bgcolor: 'yellow' }}></Grid>
        <Grid item xs={12} sm={9}>
          <Stack gap={2} justifyContent="center">
            <Button
              sx={{
                width: 'fit-content',
                backgroundColor: '#fff',
                borderRadius: '2rem',
                color: '#000',
              }}
            >
              New
            </Button>
            <Typography variant="h3" color="#fff">
              Welcome to DOTDOCHUB
            </Typography>
            <Typography color="#fff">
              Your dashboard has been improved! Explore new features like
              Notifications, Search ,Jobs platform and more
            </Typography>
            <Button
              sx={{
                width: 'fit-content',
                backgroundColor: '#fff',
                borderRadius: '.5rem',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '1rem',
                py: '.5rem',
                px: '1rem',
              }}
            >
              Dismiss Banner
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerDashboard;
