import { Box, Input, Stack, TextField, Typography } from '@mui/material';
import verifyCodeBg from '../../assests/verifyCodeBg.jpg';
import { ReactComponent as VerifyCode } from '../../assests/verifyCode.svg';

import CustomButton from '../customComponents/CustomButton';
import { Link } from 'react-router-dom';

const VerificationCode = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${verifyCodeBg})`,
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
            boxShadow: 24,
            px: 4,
            py: 6,
            textAlign: 'center',
            borderRadius: '1rem',
          }}
        >
          <Box sx={{ p: '0rem 1.5rem' }}>
            <VerifyCode width="5rem" />
            <Typography id="modal-modal-title" variant="h5">
              Verify Code
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="subtitle1"
              sx={{ color: '#949595', mb: '1rem' }}
            >
              The confirmation code send via email
            </Typography>
            <Stack
              direction="row"
              gap={2}
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                type="number"
                color="authPrimary"
                InputProps={{
                  maxLength: 1,
                  sx: { height: 40, width: 40, fontSize: '1rem' },
                }}
              />
              <TextField
                type="number"
                color="authPrimary"
                InputProps={{
                  maxLength: 1,
                  sx: { height: 40, width: 40, fontSize: '1rem' },
                }}
              />
              <TextField
                type="number"
                color="authPrimary"
                InputProps={{
                  maxLength: 1,
                  sx: { height: 40, width: 40, fontSize: '1rem' },
                }}
              />
              <TextField
                type="number"
                color="authPrimary"
                InputProps={{
                  maxLength: 1,
                  sx: { height: 40, width: 40, fontSize: '1rem' },
                }}
              />
            </Stack>

            <CustomButton variant="contained" text="Continue" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationCode;
