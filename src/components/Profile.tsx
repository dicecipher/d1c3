import { useState, useEffect } from 'react';
import './styles/Profile.scss'
import { Avatar } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Chip from '@mui/material/Chip';

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
    <div> 
    <div className="profile-content">
      
       <div className='profile-header-container'>
       <div className='profile-header'>
       <div className="profile-left">
        <Avatar alt="d1c3cipher" src="/avatar.svg" className="profile" />
        </div>
       <div className="profile-right">
       <div className='profile-info'>
       <p className='name'> D1C3 </p>
       <p className='username'> asleynicole · she/her </p>
       <p className='bio'> Rolling into the future, one cipher at a time. </p>
       </div>
       </div>
       </div>
       <span className='icon-container'><SchoolOutlinedIcon className='prof-icon'/> <p className='info'>Polytechnic University of the Philippines</p></span>
       <span className='icon-container'><RoomOutlinedIcon className='prof-icon'/> <p className='info'>Manila, Philippines</p></span>
       <span className='icon-container'><AccessTimeOutlinedIcon className='prof-icon'/> <p className='info'> {Time} <span className='utc-text'>(UTC +08:00)</span> </p></span>

       <div className='line-container'><div className='contact-line'></div></div>
       <h2 className='contact-text'>Connect with me!</h2>
       <div className='contact-container'>
       <Chip variant="outlined" className="chips"  label="Gmail" avatar={<Avatar src="https://downloadr2.apkmirror.com/wp-content/uploads/2020/10/91/5f9b61e42640e.png" />} />
       <Chip variant="outlined" className="chips"  label="GitHub" avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" />} />
       </div>
       </div>
    </div>
    </div>
    </>
    
  )
}

export default Profile
