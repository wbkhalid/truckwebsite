import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import signUpBg from '../../assests/signUpBg.jpg';
import CustomInput from '../commonComponents/CustomInput';
import CustomIconText from '../commonComponents/CustomIconText';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CustomButton from '../commonComponents/CustomButton';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${signUpBg})`,
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
            <Typography id="modal-modal-title" variant="h5">
              Register
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="subtitle1"
              sx={{ color: '#949595', mb: '1rem'  }}
            >
              Create your new account
            </Typography>
          </Box>

          <Box>
            <CustomIconText
              icon={<Person2Icon sx={{ fontSize: '.7rem' }} />}
              text="Full Name"
            />
            <CustomInput
              placeholder="Enter Your Name"
              type="text"
              variant="outlined"
            />
            <CustomIconText
              icon={<EmailIcon sx={{ fontSize: '.7rem' }} />}
              text="Email"
            />
            <CustomInput
              placeholder="john123@gmail.com"
              type="email"
              variant="outlined"
            />
            <CustomIconText
              icon={<LockIcon sx={{ fontSize: '.7rem' }} />}
              text="Password"
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
              placeholder="Re Enter Password"
              type="password"
              variant="outlined"
            />
          </Box>

          <CustomButton variant="contained" text="SignUp" />
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

        <Stack
          direction="row"
          alignItems="center"
          sx={{ position: 'absolute', bottom: 10 }}
        >
          <Typography sx={{ color: '#818181' }}>
            Already have an account?
          </Typography>

          <Button
            variant="text"
            component={Link}
            to="/login"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: 'transparent' },
            }}
          >
            Log In
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUp;
