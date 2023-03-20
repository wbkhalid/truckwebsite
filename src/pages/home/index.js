import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import CustomSideBar from '../../components/customComponents/CustomSideBar';
import NavBar from '../../components/customComponents/NavBar';


const Dashboard = () => {
  return (
    <>
      <NavBar />
      <CustomSideBar />
    </>
  );
};

export default Dashboard;
