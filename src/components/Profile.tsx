import { useState, useEffect } from 'react';
import './styles/Profile.scss'
import { Avatar } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
function Profile() {
    const [Time, setTime] = useState('');

    useEffect(() => {
      const updateTime = () => {
        const now = new Date().toLocaleTimeString('en-PH', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Manila',
        });
        setTime(now);
      };
  
      updateTime();
      const timer = setInterval(updateTime, 1000);
  
      return () => clearInterval(timer);
    }, []);
  return (
  
    <>
    <div className='profile-container'> 
    <div className="profile-content">
        <Avatar alt="d1c3cipher" src="/static/images/avatar/1.jpg" className='profile' /> 
       <div className='profile-info'>
       <p className='name'> D1C3 </p>
       <p className='username'> dicecipher · she/her </p>
       <p className='bio'> Rolling into the future, one cipher at a time. </p>
       <span className='icon-container'><SchoolOutlinedIcon className='prof-icon'/> <p className='info'>Polytechnic University of the Philippines</p></span>
       <span className='icon-container'><RoomOutlinedIcon className='prof-icon'/> <p className='info'>Manila, Philippines</p></span>
       <span className='icon-container'><AccessTimeOutlinedIcon className='prof-icon'/> <p className='info'> {Time} <span className='utc-text'>(UTC +08:00)</span> </p></span>
       </div>
    </div>
    </div>
    </>
    
  )
}

export default Profile
