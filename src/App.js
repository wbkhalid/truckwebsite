import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/auth/ForgotPassword';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import theme from './theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
