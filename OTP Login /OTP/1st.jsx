import React, { useState } from "react";
import './1st.css';

function OTP({ onSwitchToOTP2 }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = () => {
    onSwitchToOTP2();
  };

  return (
    <>
      <h1 className="login">Login via OTP</h1>
      <input
        className="input"
        type="text"
        maxLength={10}
        onKeyDown={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();}}}
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
    </>
  );
}

export default OTP;