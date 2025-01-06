import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './independentpages/StartPage';
import LoginPage from './independentpages/LoginPage';
import ProfilePage from './menu/ProfilePage';
import SignupPage from './independentpages/SignupPage';
import NotFoundPage from './menu/NotFoundPage';
import IncomePage from './menu/IncomePage';
import MainPage from './pages/MainPage';
import ExpensePage from './menu/ExpensePage';
import GraphPage from './menu/GraphPage';
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
        <Route path="/freind" element={<FreindPage />} /> {/*친구 메인페이지*/}
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
