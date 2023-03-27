import { Grid, Box, Typography, useTheme, Input, Button } from '@mui/material';
import CustomSideBar from '../../components/customComponents/CustomSideBar';
import NavBar from '../../components/customComponents/NavBar';

import PersonalInfoTop from '../../components/customComponents/PersonalInfoTop';
import CustomButtonGroup from '../../components/customComponents/CustomButtonGroup';
import { useRef } from 'react';
import DocumentTable from './DocumentTable';

const Documents = () => {
  const theme = useTheme();
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Do something with the uploaded file
  };
  return (
    <Box sx={{ display: 'flex' }}>
      {/* NavBar */}
      <NavBar />
      {/* SideBar */}
      <CustomSideBar />
      {/* Driver Component */}

      <Box mx={5} my={12} width="100%">
        <Grid container sx={{ flexGrow: 1 }} rowGap={3}>
          <Grid item xs={12}>
            <PersonalInfoTop />
          </Grid>
          <Grid item xs={12}>
            <CustomButtonGroup />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" color="#252525" sx={{ ml: '1rem' }}>
              Upload
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="10rem"
              sx={{
                backgroundColor: theme.palette.background.main,
                borderRadius: '1rem',
              }}
            >
              <Box sx={{ display: 'none' }}>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf, .doc, .docx"
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                />
              </Box>

              <Button
                variant="text"
                disableElevation
                disableRipple
                disableFocusRipple
                onClick={handleButtonClick}
                sx={{
                  color: '#000',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Add an image or a document
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" color="#252525" sx={{ ml: '1rem' }}>
              Files
            </Typography>
          </Grid>
          <Grid item xs={12}>
            
            <DocumentTable />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Documents;
