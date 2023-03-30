import { Grid, Box, useTheme } from '@mui/material';
import CustomSideBar from '../../components/commonComponents/CustomSideBar';
import NavBar from '../../components/commonComponents/NavBar';

import PersonalInfoTop from '../../components/commonComponents/PersonalInfoTop';
import CustomButtonGroup from '../../components/commonComponents/CustomButtonGroup';
import VehicleForm from './VehicleForm';

const VehicleInformation = () => {
  const theme = useTheme();

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
            <PersonalInfoTop />
          </Grid>
          <Grid item xs={12}>
            <CustomButtonGroup />
          </Grid>
          <Grid container direction="row" columnSpacing={2}>
            <Grid item xs={12} sm={6}>
              <Box
                backgroundColor={theme.palette.background.main}
                sx={{ px: 2, py: 4 }}
              >
                <VehicleForm />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box height="100%">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d435518.6817839112!2d74.05418918633279!3d31.483220874943807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1679482339397!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default VehicleInformation;