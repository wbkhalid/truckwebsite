import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import createPasswordBg from '../../assests/createPasswordBg.jpg';
import CustomInput from '../commonComponents/CustomInput';
import CustomIconText from '../commonComponents/CustomIconText';
import LockIcon from '@mui/icons-material/Lock';
import CustomButton from '../commonComponents/CustomButton';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';

import { ReactComponent as CreatePasswordPic } from '../../assests/createpassword.svg';

const CreatePassword = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${createPasswordBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          background: 'rgba(0, 0, 0,.7)',
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
          <Box sx={{ p: '0rem 1.5rem' }}>
            <CreatePasswordPic width="5rem" />
            <Typography id="modal-modal-title" variant="h5">
              Create Password
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="subtitle1"
              sx={{ color: '#949595', mb: '1rem', mx: '1.8rem' }}
            >
              Create your new password
            </Typography>
          </Box>

          <Box>
            <CustomIconText
              icon={<LockIcon sx={{ fontSize: '.7rem' }} />}
              text="New Password"
            />
            <CustomInput
              placeholder="password upto 8 characters"
              type="password"
              variant="outlined"
            />
            <CustomIconText
              icon={<LockIcon sx={{ fontSize: '.7rem' }} />}
              text="Confirm Password"
            />
            <CustomInput
              placeholder="Re-Enter Password"
              type="password"
              variant="outlined"
            />
          </Box>
          <CustomButton variant="contained" text="Continue" />
          <Divider sx={{ fontSize: '.8rem' }}>OR</Divider>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <IconButton
              sx={{
                color: (theme) => theme.palette.authPrimary.main,
                bgcolor: '#fff',
              }}
            >
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton
              sx={{
                color: (theme) => theme.palette.authPrimary.main,
                bgcolor: '#fff',
              }}
            >
              <GoogleIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatePassword;