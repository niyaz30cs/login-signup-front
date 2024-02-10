import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
// import Profile from './Components/Profile';
import Welcome from './Components/Welcome';
import AccountPage from './Components/AccountPage';
import LoginPage from './Components/LoginPage';
import Profile from './Components/Profile';
// import LoginPage from './Components/LoginPage';
function App() {
  return (
    <div>
      {/* <Welcome /> */}
      {/* <Welcome/> */}
      {/* <AccountPage/> */}
      {/* <LoginPage/> */}
      {/* <Profile/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/create' element={<AccountPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
