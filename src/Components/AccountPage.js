import React from 'react'
import "./AccountPage.css";
import { useNavigate } from 'react-router-dom';
function AccountPage() {
  const navigate=useNavigate();
  const handleClick=()=>{
        navigate("/login")
  }
  return (
    <form>
      <h2 className='account-heading'>Create your PopX account</h2>
      <div className='input-container'>
        <label htmlFor='name' className='name'>Full Name <span className='star'>*</span></label>
        <input type='text' id='name' placeholder='Enter Name' required />
      </div>
      <div className='input-container'>
        <label htmlFor='number' className='number'>Phone number <span className='star'>*</span></label>
        <input type='number' id='number' placeholder='Enter Number' required />
      </div>
      <div className='input-container'>
        <label htmlFor='email' className='email'>Email address <span className='star'>*</span></label>
        <input type='email' id='email' placeholder='Enter Email' required />
      </div>
      <div className='input-container'>
        <label htmlFor='password' className='name'>Password <span className='star'>*</span></label>
        <input type='password' id='password' placeholder='Password' required />
      </div>
      <div className='input-container'>
        <label htmlFor='company' className='company'>Company name <span className='star'>*</span></label>
        <input type='text' id='company' placeholder='Company Name' required />
      </div>
      <div className='radio-btn-container'>
        <label htmlFor='agency'>Are you an Agency?<span className='star'>*</span></label>
        <br />
        <div className='both-radio-btn'>
          <div className='yes-container'>
            <input type='radio' name='agency' value="yes" required className='radio-btn-1' />
            <span>Yes</span>
          </div>
          <div className='yes-container'>
            <input type='radio' name='agency' value="no" required className='radio-btn-2' />
            <span>No</span>
          </div>
        </div>
      </div>
      <div className='last-btn'>
      <button className='create-btn' onClick={handleClick}>Create Account</button>
      </div>
    </form>
  )
}

export default AccountPage
