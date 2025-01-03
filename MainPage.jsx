import React from "react";
import { useNavigate } from "react-router-dom";
import '../style/MainPage.scss'

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <nav className="sidebar">
        <div className="nav-logo" onClick={() => navigate("/")}>
          BudgetGuardians
        </div>
        <ul className="nav-menu">
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/profile")}>내정보</li>
          <li onClick={() => navigate("/income")}>수입내역</li>
          <li onClick={() => navigate("/expenses")}>지출내역</li>
          <li onClick={() => navigate("/graphs/purpose")}>용도별 그래프</li>
          <li onClick={() => navigate("/graphs/income-expense")}>
            수입/지출 그래프
          </li>
          <li onClick={() => navigate("/logout")}>로그아웃</li> {/*리스트로 navbar 설정*/}
        </ul>
      </nav>
      <div className="content">
        {/* 페이지 콘텐츠 만들기 */}
      </div>
    </div>
  );
};

export default MainPage;
