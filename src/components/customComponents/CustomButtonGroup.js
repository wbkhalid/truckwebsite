import Button from '@mui/material/Button';
import { Stack, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const CustomButtonGroup = () => {
  const location = useLocation();
  const theme = useTheme();
  const buttonData = [
    {
      id: 1,
      name: 'Vehicle Information',
      to: '/vehicle',
    },
    {
      id: 2,
      name: 'Personal Information',
      to: '/personal',
    },
    {
      id: 3,
      name: 'Documents',
      to: '/documents',
    },
  ];
  return (
    <Stack direction="row">
      {buttonData.map((item) => (
        <Button
          variant="contained"
          component={Link}
          to={item.to}
          sx={{
            px: '2rem',
            color: location.pathname === `${item.to}` ? '#fff' : '#7c7d7e',
            bgcolor:
              location.pathname === `${item.to}`
                ? `${theme.palette.authPrimary.main}`
                : `${theme.palette.background.main}`,
            '&:hover': {
              bgcolor: (theme) => theme.palette.authPrimary.main,
              color: '#fff',
            },
          }}
        >
          {item.name}
        </Button>
      ))}
    </Stack>
  );
};

export default CustomButtonGroup;
