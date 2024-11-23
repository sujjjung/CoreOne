import React from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation 추가
import "./Header.css";

function Header() {
  const location = useLocation(); // 현재 경로 정보 가져오기

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none" }} className="logo">
          CoreOne
        </Link>
        <ul className="nav-links">
          <li>제품</li>
          {/* 사업자 등록 링크 클릭 시 BusinessRegistration 페이지로 이동 */}
          <li className={`business-link ${location.pathname === "/business-registration" ? "active" : ""}`}>
            <Link to="/business-registration" style={{ textDecoration: "none" }}>
              사업자 등록
            </Link>
          </li>
          <li>개발진</li>
        </ul>
        <div className="buttons">
          {/* 회원가입, 로그인 버튼 */}
          <Link to="/signup">
            <button className="signup-btn">회원가입</button>
          </Link>
          <Link to="/login">
            <button className="login-btn">로그인</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;