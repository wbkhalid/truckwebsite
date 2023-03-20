import { Search } from '@mui/icons-material';
import {
  Grid,
  Typography,
  Box,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Card,
  Avatar,
} from '@mui/material';
import CustomSideBar from '../../components/customComponents/CustomSideBar';
import NavBar from '../../components/customComponents/NavBar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const driverData = [
  {
    id:1,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id:2,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id:3,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id:4,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id:5,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id:6,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id:7,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id:8,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id:9,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id:10,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
];

const Drivers = () => {
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
          p: 3,
          marginTop: 6,
          // backgroundColor: 'red',
          px: '2rem',
          py: '1.5rem',
        }}
      >
        <Typography variant="h6">Drivers</Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mt: '1rem' }}
        >
          <TextField
            placeholder="Search"
            variant="outlined"
            // color='#fff'
            sx={{ width: '40%' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Search color="authPrimary" fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            sx={{
              color: '#fff',
              backgroundColor: (theme) => theme.palette.authPrimary.main,
              height: '50px',
              fontSize: '1.2rem',
            }}
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
          >
            Add Driver
          </Button>
        </Stack>
        <Grid container  spacing={2} style={{ flexGrow: 1 }}>
          {driverData.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <Card
                variant="outlined"
                sx={{
                  width: '250px',
                  height: '250px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: (theme) => theme.palette.authPrimary.main,
                }}
              >
                <Stack alignItems="center" gap={1}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ border: '2px solid black', width: 72, height: 72 }}
                  />
                  <Typography variant="h6">{card.name}</Typography>
                  <Typography variant="p">{card.title}</Typography>
                  <Button variant="outlined" sx={{ px: '3rem' }}>
                    View Details
                  </Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Drivers;
