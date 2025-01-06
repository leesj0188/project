import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import '../style/FriendIcon.scss';

const FriendIcon = () => {
  const navigate = useNavigate(); // 네비게이트 훅 생성

  const handleClick = () => {
    navigate('/freind'); // /freind 경로로 이동
  };

  return (
    <div className="friend-icon" onClick={handleClick} title="친구창 열기">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="icon"
        fill="#4CAF50"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
};

export default FriendIcon;
