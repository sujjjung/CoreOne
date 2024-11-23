import "./BusinessRegistration.css";
import Header from "./Header";
import React, { useState } from "react";

function BusinessRegistration() {
  const [formData, setFormData] = useState({
    applicantName: "",
    applicantPhone: "",
    companyName: "",
    ceoName: "",
    businessNumber: "",
    businessType: "",
    establishmentDate: "",
    companyAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 제출 처리 로직
    console.log(formData);
  };

  return (
    <div>
      <Header /> {/* Header 추가 */}
      <div className="business-registration-container">
        <div className="business-registration-box">
          <form onSubmit={handleSubmit}>
          <h3> 신청자 정보 </h3>
            <div className="input-group">
              <label htmlFor="applicantName">
                <i className="fas fa-user"></i> 신청자 이름
              </label>
              <input
                type="text"
                id="applicantName"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleChange}
                placeholder="신청자 이름을 입력하세요"
              />
            </div>
            <div className="input-group">
              <label htmlFor="applicantPhone">
                <i className="fas fa-phone-alt"></i> 신청자 전화번호
              </label>
              <input
                type="tel"
                id="applicantPhone"
                name="applicantPhone"
                value={formData.applicantPhone}
                onChange={handleChange}
                placeholder="전화번호를 입력하세요"
              />
            </div>

            <h3>가입 회사 정보</h3>
            <div className="input-group">
              <label htmlFor="companyName">
                <i className="fas fa-building"></i> 회사명
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="회사명을 입력하세요"
              />
            </div>
            <div className="input-group">
              <label htmlFor="ceoName">
                <i className="fas fa-user-circle"></i> 대표자명
              </label>
              <input
                type="text"
                id="ceoName"
                name="ceoName"
                value={formData.ceoName}
                onChange={handleChange}
                placeholder="대표자명을 입력하세요"
              />
            </div>
            <div className="input-group">
              <label htmlFor="businessNumber">
                <i className="fas fa-id-card"></i> 사업자 등록 번호
              </label>
              <input
                type="text"
                id="businessNumber"
                name="businessNumber"
                value={formData.businessNumber}
                onChange={handleChange}
                placeholder="사업자 등록 번호를 입력하세요"
              />
            </div>
            <div className="input-group">
              <label htmlFor="businessType">
                <i className="fas fa-tag"></i> 업태/종목
              </label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                placeholder="업태/종목을 입력하세요"
              />
            </div>
            <div className="input-group">
              <label htmlFor="establishmentDate">
                <i className="fas fa-calendar-alt"></i> 설립일자
              </label>
              <input
                type="date"
                id="establishmentDate"
                name="establishmentDate"
                value={formData.establishmentDate}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="companyAddress">
                <i className="fas fa-map-marker-alt"></i> 주소
              </label>
              <input
                type="text"
                id="companyAddress"
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleChange}
                placeholder="주소를 입력하세요"
              />
            </div>

            <button type="submit" className="register-button">
              가입하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BusinessRegistration;