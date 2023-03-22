import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreatePassword from './components/auth/CreatePassword';
import ForgotPassword from './components/auth/ForgotPassword';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Success from './components/auth/Success';
import VerificationCode from './components/auth/VerificationCode';
import theme from './theme';
import './App.css';
import Dashboard from './pages/home';
import Drivers from './pages/drivers';
import PersonalInfoTop from './components/customComponents/PersonalInfoTop';
import PersonalInformation from './pages/personal infomation';
import VehicleInformation from './pages/vehicle information';
import Documents from './pages/documents';
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
        
          <Route path="/" element={<Dashboard />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verificationcode" element={<VerificationCode />} />

          <Route path="/createpassword" element={<CreatePassword />} />
          <Route path="/success" element={<Success />} />
          <Route path="/info" element={<PersonalInfoTop />} />
          <Route path="/personal" element={<PersonalInformation />} />
          <Route path="/vehicle" element={<VehicleInformation />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
