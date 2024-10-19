import React, { useState } from "react";
import './App.css'
import './OTP/App.jsx'

function App() {
  return (
    <>
      <h1 className="login">Login via OTP</h1>
      <div className="container">
        <input className="otp-input" type="text" maxLength="1" />
        <input className="otp-input" type="text" maxLength="1" />
        <input className="otp-input" type="text" maxLength="1" />
        <input className="otp-input" type="text" maxLength="1" />
      </div>
<button className="send">Login</button>
    </>
);
}




export default App;

