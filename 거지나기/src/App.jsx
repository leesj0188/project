import React from 'react';
import { Routes, Route } from 'react-router-dom'; // BrowserRouter 제거
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path='/main' element={<MainPage />} /> // 메인페이지로 이동
    </Routes>
  );
};

export default App;
