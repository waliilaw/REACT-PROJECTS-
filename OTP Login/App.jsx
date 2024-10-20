import React, { useState } from "react";
import OTP from './OTP/1st.jsx';
import OTP2 from './OTP/2nd.jsx';
import ThankYou from './OTP/ThankYou.jsx';

function App() {
  const [view, setView] = useState('otp');

  const handleSwitchToOTP2 = () => {
    setView('otp2');
  };

  const handleOtpSubmit = () => {
    setView('thankyou');
  };

  const handleBackToOTP = () => {
    setView('otp');
  };

  return (
    <>
      {view === 'otp' && <OTP onSwitchToOTP2={handleSwitchToOTP2} />}
      {view === 'otp2' && <OTP2 onOtpSubmit={handleOtpSubmit} />}
      {view === 'thankyou' && <ThankYou onBackToOTP={handleBackToOTP} />}
    </>
  );
}

export default App;