import './styles/Header.scss' 
import Theme from './Theme';
function Header() {
  return (
    <>
    <div className='header-container'> 
        <div className='box-container'>
        <span className='box1'></span>
        <span className='box2'></span>
        <span className='box3'></span>
        <span className='box4'></span>
        <span className='box5'></span>
        </div>
        <Theme />
    </div>
    </>
    
  )
}

export default Header
