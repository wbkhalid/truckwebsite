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
  useTheme,
} from '@mui/material';
import CustomSideBar from '../../components/customComponents/CustomSideBar';
import NavBar from '../../components/customComponents/NavBar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const driverData = [
  {
    id: 1,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id: 2,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id: 3,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id: 4,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id: 5,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id: 6,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id: 7,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
  {
    id: 8,
    // image: URL(''),
    name: 'john',
    title: 'driver',
  },
];

const Drivers = () => {
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
        sx={{
          marginTop: 10,
          px: '2rem',
          py: '1.5rem',
        }}
      >
        <Typography variant="h6">Drivers</Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: '1rem', mb: '3rem' }}
        >
          <TextField
            placeholder="Search"
            variant="filled"
            sx={{
              width: '40%',
              backgroundColor: '#f7f9fb',
            }}
            InputProps={{
              sx: { height: 45, borderRadius: '.5rem' },
              disableUnderline: true,
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
              height: '2.5rem',
              fontSize: '1.2rem',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.authPrimary.light,
              },
            }}
            variant="contained"
            startIcon={
              <AddCircleOutlineIcon
                sx={{ width: '1.5rem', height: '1.5rem' }}
              />
            }
          >
            Add Driver
          </Button>
        </Stack>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {driverData.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <Card
                variant="outlined"
                sx={{
                  px: '0rem',
                  py: '1rem',
                  display: 'flex',
                  flexGrow: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: ' #f7f9fb',
                  borderRadius: '1rem',
                  cursor: 'pointer',

                  position: 'relative',

                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.authPrimary.main,
                    color: '#fff',

                    '& .MuiAvatar-root': {
                      borderColor: '#fff',
                    },

                    '& button': {
                      borderColor: '#fff',
                      color: '#fff',
                    },
                    '&:hover .divider': {
                      visibility: 'visible',
                    },
                  },
                }}
              >
                <Stack alignItems="center" gap={1}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{
                      border: `2px solid ${theme.palette.authPrimary.main}`,
                      width: 72,
                      height: 72,
                    }}
                  />
                  <Typography variant="h6">{card.name}</Typography>
                  <Typography variant="p">{card.title}</Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      px: '3rem',
                      color: (theme) => theme.palette.authPrimary.main,
                      borderColor: (theme) => theme.palette.authPrimary.main,
                      fontWeight: 'bold',
                    }}
                  >
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
