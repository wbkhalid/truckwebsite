import Button from '@mui/material/Button';
import { Stack, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VerticalAlignBottomOutlinedIcon from '@mui/icons-material/VerticalAlignBottomOutlined';

const ButtonDashboard = () => {
  const location = useLocation();
  const theme = useTheme();
  const buttonData = [
    {
      id: 1,
      name: 'Reports',
      to: '/vehicle',
      icon: <AssessmentOutlinedIcon />,
    },
    {
      id: 2,
      name: 'Settings',
      to: '/personal',
      icon: <SettingsOutlinedIcon />,
    },
    {
      id: 3,
      name: 'Export',
      to: '/documents',
      icon: <VerticalAlignBottomOutlinedIcon />,
    },
  ];
  return (
    <Stack direction="row" gap={1}>
      {buttonData.map((item) => (
        <Button
          key={item.id}
          variant="contained"
          disableElevation
          component={Link}
          to={item.to}
          endIcon={<span sx={{ fontSize: '2rem' }}>{item.icon}</span>}
          sx={{
            fontWeight: '700',
            fontSize: '1.2rem',
            px: '1.5rem',

            color:
              location.pathname === `${item.to}`
                ? '#fff'
                : `${theme.palette.authPrimary.main}`,
            border: '1px solid',
            bgcolor:
              location.pathname === `${item.to}`
                ? `${theme.palette.authPrimary.main}`
                : 'transparent',
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

export default ButtonDashboard;
