import React from 'react'
import "./AccountPage.css";
import { useNavigate } from 'react-router-dom';
function LoginPage() {
    const navigate=useNavigate();
    return (
        <form>
            <div className='signin-heading'>
            <h2 className='signin-text'>Signin to your PopX account</h2>
            <p className='para'>Lorem ipsum dolor sit amet,</p>
            <p className='para'>consectetur adipiscing elit,</p>
            </div>
            <div className='input-container'>
                <label htmlFor='email' className='email'>Email address</label>
                <input type='email' id='email' placeholder='Enter email address' required />
            </div>
            <div className='input-container'>
                <label htmlFor='password' className='name'>Password</label>
                <input type='password' id='password' placeholder='Enter password' required />
            </div>
            <div className='login'>
                <button className='login-btn' onClick={()=>navigate("/profile")}>Login</button>
            </div>
        </form>
    )
}

export default LoginPage;
