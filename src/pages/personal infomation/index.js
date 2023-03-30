import {
  Grid,
  Box,
  Typography,
  IconButton,
  useTheme,
  Stack,
  Divider,
} from '@mui/material';
import CustomSideBar from '../../components/commonComponents/CustomSideBar';
import NavBar from '../../components/commonComponents/NavBar';

import PersonalInfoTop from '../../components/commonComponents/PersonalInfoTop';
import CustomButtonGroup from '../../components/commonComponents/CustomButtonGroup';
import EditIcon from '@mui/icons-material/Edit';

const PersonalInformation = () => {
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
          <Grid item xs={12}>
            <Typography variant="h6" color="#252525">
              Personal Information
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: theme.palette.background.main,
                borderRadius: '1rem',
                p: '1rem',
              }}
            >
              <Grid container>
                <Grid item container justifyContent="flex-end">
                  <IconButton
                    aria-label="delete"
                    sx={{
                      color: theme.palette.authPrimary.main,
                      p: 0,
                    }}
                  >
                    <EditIcon sx={{ fontSize: '1.3rem', p: 0 }} />
                  </IconButton>
                </Grid>

                <Grid container spacing={1} width="60%" color="#252525">
                  <Grid item xs={6}>
                    <Typography variant="h6">Preferred Name</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">John Doe</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6">Email Address</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">johndoe@gmail.com</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6">Mobile Number</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">(303)123-4567</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6">Emergency Contact</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack direction="row">
                      <Typography variant="body1">John 2</Typography>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ mx: '.3rem', border: '1px solid #8e8f90' }}
                      />
                      <Typography variant="body1">Brother</Typography>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ mx: '.3rem', border: '1px solid #8e8f90' }}
                      />
                      <Typography variant="body1">(303)987-5432</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PersonalInformation;
