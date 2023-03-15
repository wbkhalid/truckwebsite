import { Box, Typography } from '@mui/material';
import forgotPasswordBg from '../../assests/forgotPasswordBg.jpg';
import CustomInput from '../customComponents/CustomInput';
import CustomIconText from '../customComponents/CustomIconText';
import EmailIcon from '@mui/icons-material/Email';
import CustomButton from '../customComponents/CustomButton';
import { ReactComponent as ForgotPasswordPic } from '../../assests/forgotpassword.svg';
const ForgotPassword = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${forgotPasswordBg})`,
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
            <ForgotPasswordPic width='5rem'/>
            <Typography id="modal-modal-title" variant="h5">
              Forgot Password
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="subtitle1"
              sx={{ color: '#949595', mb: '1rem', mx: '1.7rem' }}
            >
              Type your email we will send your verification code via email
            </Typography>
          </Box>

          <Box>
            <CustomIconText
              icon={<EmailIcon sx={{ fontSize: '.7rem' }} />}
              text="Email"
            />
            <CustomInput
              placeholder="john123@gmail.com"
              type="email"
              variant="outlined"
            />
          </Box>

          <CustomButton variant="contained" text="Continue" />
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
