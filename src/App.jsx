import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import IncomePage from './pages/IncomePage';
import MainPage from './pages/MainPage';
import ExpensePage from './pages/ExpensePage';
import GraphPage from './pages/GraphPage';
import InitialPage from './pages/InitialPage'; // 이니셜페이지 추가
import FreindPage from './pages/FriendPage';
import Layout from './components/Layout'; // Layout import
import './style/MainPage.scss';
const App = () => {
  return (
    <Routes>
      {/* 공통 레이아웃 적용되는 페이지 */}
      <Route element={<Layout />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expenses" element={<ExpensePage />} />
        <Route path="/graphs" element={<GraphPage />} /> {/* 그래프 페이지 */}
        <Route path="/initial" element={<InitialPage />} /> {/* 이니셜 페이지 */}
        <Route path="/freind" element={<FreindPage />} />
      </Route>
      {/* 개별 페이지 */}
      <Route path="/" element={<StartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} /> {/* 404 페이지 */}
    </Routes>
  );
};

export default App;
