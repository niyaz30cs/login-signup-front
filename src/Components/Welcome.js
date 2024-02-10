import React from 'react'
import { useNavigate } from 'react-router-dom'
function Welcome() {
  const navigate=useNavigate();
  return (
    <div className='welcome-container'>
      <div className='welcome'>
        <h2>Welcome to PopX</h2>
        <p className="para">Lorem ipsum dolor sit amet,</p>
        <p className="para">consectetur adipiscing elit,</p>
      </div>
      <div className='welcome-btn'>
        <button className='create-btn ' onClick={()=>navigate("/create")}>Create Account</button>
        <button className='already-btn' onClick={()=>navigate("/login")}>Already Registered?Login</button>
      </div>
    </div>
  )
}

export default Welcome
