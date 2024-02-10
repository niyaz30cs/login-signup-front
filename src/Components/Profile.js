import React from 'react'
import photo from "../images.jpeg";
import { CiCamera } from "react-icons/ci";
function Profile() {
    return (
        <div className='background'>
            <div className='profile-container'>
                <img src={photo} alt='not found' className='profile-photo' />
                <CiCamera className='camera' />
                <div className='profile-heading'>
                    <h4>Marry Doe</h4>
                    <p>Marry@Gmail.Com</p>
                </div>
            </div>
            <p className='profile-para'>Lorem Ipsum Dolor SitAmet Consetetur Invidunt Sadipscing Elitr,Sed Diam Nonumy Invidunt Ut  Eirmod Tempor Invidunt Ut Labore Et Dolore.</p>
            <div className='dash-border'></div>
        </div>
    )
}

export default Profile
