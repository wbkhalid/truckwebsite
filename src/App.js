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
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
