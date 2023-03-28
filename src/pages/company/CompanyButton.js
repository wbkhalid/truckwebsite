import { Button, useTheme } from '@mui/material';

const CompanyButton = ({ text, type, onClick }) => {
  const theme = useTheme();
  return (
    <Button
      
      type={type}
      sx={{
        fontSize: '1rem',
        boxShadow: '-1px 1px',
        width: '6rem',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        color: theme.palette.authPrimary.main,
        borderColor: theme.palette.authPrimary.main,
        textTransform: 'uppercase',
        '&:hover': {
          variant: 'contained',
          backgroundColor: theme.palette.authPrimary.main,
          color: '#fff',
          borderColor: theme.palette.authPrimary.main,
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CompanyButton;
