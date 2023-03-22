import { Grid, Box } from '@mui/material';
import CustomSideBar from '../../components/customComponents/CustomSideBar';
import NavBar from '../../components/customComponents/NavBar';

import PersonalInfoTop from '../../components/customComponents/PersonalInfoTop';
import CustomButtonGroup from '../../components/customComponents/CustomButtonGroup';

const VehicleInformation = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* NavBar */}
      <NavBar />
      {/* SideBar */}
      <CustomSideBar />
      {/* Driver Component */}

      <Box mx={5} my={12} width="100%" border="1px solid">
        <Grid container sx={{ flexGrow: 1 }} rowGap={3}>
          <Grid item xs={12}>
            <PersonalInfoTop />
          </Grid>
          <Grid item xs={12}>
            <CustomButtonGroup />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default VehicleInformation