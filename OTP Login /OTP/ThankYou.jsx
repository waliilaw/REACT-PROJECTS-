import React from "react";

function ThankYou({ onBackToOTP }) {
  return (
    <>
      <h1 className="thank-you">Thank you for using this wonderful project by Wali the Great!</h1>
      <button className="back-button" onClick={onBackToOTP}>Back to OTP</button>
    </>
  );
}

export default ThankYou;