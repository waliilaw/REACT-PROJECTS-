import React, { useState, useRef } from "react";
import './2nd.css';

function OTP2({ onOtpSubmit }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    onOtpSubmit();
  };

  return (
    <>
      <h1 className="login">Enter OTP</h1>
      <div className="container">
        {otp.map((digit, index) => (
          <input
            key={index}
            className="otp-input"
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            ref={(el) => (inputRefs.current[index] = el)} // Reference to focus inputs
          />
        ))}
      </div>
      <button className="send" onClick={handleSubmit}>Login</button>
    </>
  );
}

export default OTP2;