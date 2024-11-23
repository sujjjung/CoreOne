import React, { useState } from "react";
import Header from "./Header";
import "./Signup.css"; // 스타일링을 위한 CSS 파일 임포트

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    birthdate: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입 데이터:", formData);
  };

  return (
    <div className="signup-page">
      <Header /> {/* Header 추가 */}
      <div className="signup-container">
        <div className="signup-box">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">
                <i className="fas fa-user"></i> 아이디
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
                <i className="fas fa-lock"></i> 비밀번호
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
            <div className="input-group">
              <label htmlFor="name">
                <i className="fas fa-user-circle"></i> 이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="input-group">
              <label htmlFor="birthdate">
                <i className="fas fa-calendar-alt"></i> 생년월일
              </label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">
                <i className="fas fa-phone-alt"></i> 전화번호
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="전화번호를 입력하세요"
              />
            </div>
            <button type="submit" className="signup-button">
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
