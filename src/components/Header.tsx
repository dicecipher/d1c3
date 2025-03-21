import './styles/Header.scss' 
import { Avatar } from '@mui/material';
function Header() {
  return (
  
    <>
    <div className='header-container'> 
    <div className="left-content">
        <Avatar alt="d1c3cipher" src="/static/images/avatar/1.jpg" className='avatar' /> 
        <p> Dicecipher </p>
    </div>
        <div className='box-container'>
        <span className='box1'></span>
        <span className='box2'></span>
        <span className='box3'></span>
        <span className='box4'></span>
        <span className='box5'></span>
        </div>
        
    </div>
    </>
    
  )
}

export default Header
