import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    id: 1,
    icon: <SpeedOutlinedIcon />,
    name: 'Dashboard',
    to: '/',
  },
  {
    id: 2,
    icon: <CalendarMonthOutlinedIcon />,
    name: 'Trips',
    to: '/drivers',
  },
  {
    id: 3,
    icon: <GroupsOutlinedIcon />,
    name: 'Drivers',
    to: '/drivers',
  },
  {
    id: 4,
    icon: <PersonOutlineOutlinedIcon />,
    name: 'Company',
    to: '/drivers',
  },
  {
    id: 5,
    icon: <TrendingUpOutlinedIcon />,
    name: 'Reports',
    to: '/drivers',
  },
  {
    id: 6,
    icon: <SettingsOutlinedIcon />,
    name: 'Settings',
    to: '/drivers',
  },
  {
    id: 7,
    icon: <HelpOutlineOutlinedIcon />,
    name: 'Help',
    to: '/drivers',
  },
];

const drawerWidth = 200;

const openedMixin = (theme) => ({
  paddingTop: 25,
  width: drawerWidth,
  backgroundColor: '#f7f9fb',
  marginTop: 45,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  backgroundColor: '#f7f9fb',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  paddingTop: 25,
  marginTop: 45,

  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const CustomSideBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" open={open} sx={{ py: '8' }}>
      <DrawerHeader>
        <IconButton onClick={handleToggle} sx={{ color: '#7a7e82' }}>
          {!open ? (
            <ChevronRightIcon />
          ) : (
            <Stack direction="row" alignItems="center" gap={3} sx={{ mr: '3' }}>
              <ChevronLeftIcon />
              <Typography variant="h6">Collapse Menu</Typography>
            </Stack>
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            component={Link}
            to={item.to}
            key={item.id}
            sx={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#7a7e82',

              '&:hover': {
                color: '#fff',
                backgroundColor: (theme) => theme.palette.authPrimary.main,
                borderTopRightRadius: '1.5rem',
                borderBottomRightRadius: '1.5rem',
              },
            }}
          >
            <ListItemIcon
              sx={{
                '&:hover': {
                  color: '#fff',
                },
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} disableTypography />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default CustomSideBar;
