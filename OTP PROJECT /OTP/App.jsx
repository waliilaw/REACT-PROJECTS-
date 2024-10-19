import React, { useState } from "react";
import './App.css'

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = () => {

    console.log(`Sending OTP to: ${phoneNumber}`);
  };


  return(<>
    <h1 className="login">Login via OTP</h1>

<input className = "input" type="text" placeholder = "Enter phone number "/>  
  
  <button className="send" onClick={handleSendOTP}>Send OTP</button>
  


</>)

}

export default App;
