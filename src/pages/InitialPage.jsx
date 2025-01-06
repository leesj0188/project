import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/InitialPage.scss';

const InitialPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/income'); // /income 페이지로 이동
  };

  return (
    <div className="initial-page-container">
      <div className="welcome-message">
        <h2>반가워요!</h2>
        <p>목표금액을 설정하고 지갑 방어율을 올려 합리적인 소비를 해보세요!</p>
        <button className="set-goal-button" onClick={handleButtonClick}>
          목표 금액 설정하러 가기!
        </button>
      </div>
    </div>
  );
};

export default InitialPage;


