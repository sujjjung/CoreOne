import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'; // 홈 페이지 컴포넌트
import Signup from './Pages/Signup'; // 회원가입 페이지 컴포넌트
import Login from './Pages/Login'; // 로그인 페이지 컴포넌트
import BusinessRegistration from './Pages/BusinessRegistration'; // 사업자 등록 페이지 컴포넌트

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* 홈 페이지 */}
      <Route path="/signup" element={<Signup />} /> {/* 회원가입 페이지 */}
      <Route path="/login" element={<Login />} /> {/* 로그인 페이지 */}
      <Route path="/business-registration" element={<BusinessRegistration />} /> {/* 사업자 등록 페이지 */}
    </Routes>
  );
};

export default AppRoutes;