import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // 스타일링을 위한 CSS 파일 임포트
import Header from "./Header"; // Header 컴포넌트 임포트

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 데이터:", formData);
    // 로그인 처리 로직 추가 (API 호출 등)
  };

  return (
    <div className="login-page">
      <Header /> {/* Header 추가 */}
      <div className="login-container">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">
                <i className="fas fa-user"></i> ID
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="아이디를 입력하세요"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">
                <i className="fas fa-lock"></i> PW
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <button type="submit" className="login-button">
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;