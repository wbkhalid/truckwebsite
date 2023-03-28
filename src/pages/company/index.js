import { Typography, Box, useTheme } from '@mui/material';
import CustomSideBar from '../../components/customComponents/CustomSideBar';
import NavBar from '../../components/customComponents/NavBar';

import RegistrationForm from './RegistrationForm';

const Company = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex' }}>
      {/* NavBar */}
      <NavBar />
      {/* SideBar */}
      <CustomSideBar />
      {/* Driver Component */}
      <Box
        component="main"
        width="100%"
        sx={{
          marginTop: 10,
          px: '2rem',
          py: '1.5rem',
        }}
      >
        <Typography variant="h4">Company Information</Typography>
        <Box
          bgcolor={theme.palette.background.main}
          marginTop="1rem"
          padding="2rem"
        >
          <RegistrationForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Company;
