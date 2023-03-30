import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import createPasswordBg from '../../assests/createPasswordBg.jpg';
import CustomInput from '../commonComponents/CustomInput';
import CustomIconText from '../commonComponents/CustomIconText';
import LockIcon from '@mui/icons-material/Lock';
import CustomButton from '../commonComponents/CustomButton';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import { ReactComponent as Tick } from '../../assests/tick.svg';

const Success = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.authPrimary.main,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: 300,
          bgcolor: '#fff',
          border: 'unset',
          outline: 'none',
          boxShadow: 24,
          px: 4,
          py: 6,
          textAlign: 'center',
          borderRadius: '1rem',
        }}
      >
        <Box>
          <Tick width="8rem" />
          <Typography id="modal-modal-title" variant="h5">
            Success
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="subtitle1"
            sx={{ color: '#949595' }}
          >
            Your password has been updated successfully
          </Typography>
        </Box>
        
        <CustomButton variant="contained" text="Back to login" />
      </Box>
    </Box>
  );
};

export default Success;
