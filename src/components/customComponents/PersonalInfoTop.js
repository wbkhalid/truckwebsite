import { Avatar, Divider, Grid, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const PersonalInfoTop = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Formated Date

  const formattedDate = `${currentDate.toLocaleString('default', {
    month: 'short',
  })} ${currentDate
    .getDate()
    .toString()
    .padStart(2, '0')},${currentDate.getFullYear()} `;

  // Formatted Date

  const hours = currentTime.getHours() % 12 || 12;
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const ampm = currentTime.getHours() >= 12 ? 'pm' : 'am';
  const formattedTime = `${hours}:${minutes} ${ampm}`;
  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <Avatar
          {...stringAvatar('John Doe')}
          sx={{
            width: 90,
            height: 90,
            bgcolor: (theme) => theme.palette.authPrimary.main,
            fontWeight: 'bold',
            fontSize: '2.5rem',
          }}
        />
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" >
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              John Doe
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row">
              <Typography variant="body2" color="#999999" gutterBottom>
                (303) 123-4567
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ border: '.1rem solid #dddddd', mx: 1, height: '.9rem' }}
              />
              <Typography variant="body2" color="#999999">
                abc@gmail.com
              </Typography>
            </Stack>
          </Grid>

          <Grid item>
            <Typography variant="body2" color="#999999">
              Last Active {formattedDate} at {formattedTime}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonalInfoTop;
