import { Box, Grid, Stack, Typography  } from '@mui/material';

import CustomSideBar from '../../components/commonComponents/CustomSideBar';
import NavBar from '../../components/commonComponents/NavBar';
import BannerDashboard from './BannerDashboard';
import ButtonDashboard from './ButtonsDashboard';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* NavBar */}
      <NavBar />
      {/* SideBar */}
      <CustomSideBar />
      {/* Driver Component */}
      <Box mx={5} my={12} width="100%">
        <Grid container sx={{ flexGrow: 1 }} rowGap={3}>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h4">Dashboard</Typography>
              <ButtonDashboard />
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <BannerDashboard />
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
