import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HamburgerBtn from '../components/HamburgerBtn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FriendIcon from '../components/FriendIcon';
import '../style/MainPage.scss';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  console.log('Layout 렌더링'); // 확인용 로그

  const handleFriendIconClick = () => {
    console.log('친구창 열기');
    // 친구창 열기 로직 추가
  };

  return (
    <div className="layout-container">
      <HamburgerBtn
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Navbar isSidebarOpen={isSidebarOpen} />

      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
        <Outlet />
      </div>

      {/* 친구 아이콘 */}
      <FriendIcon onClick={handleFriendIconClick} />

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Layout;

