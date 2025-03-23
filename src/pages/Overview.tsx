import "./styles/Overview.scss";
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

function Overview() {
    return (
    <>
     <div className="overview-container">
      <p className="id">Dicecipher/README.md</p>
      <pre className="ascii">
      {`
      _   _                   _  _    _       ____   _   ____  _____   _ 
      | | | |  ___  _   _     (_)| |_ ( )___  |  _ \\ / | / ___||___ /  | |
      | |_| | / _ \\| | | |    | || __||// __| | | | || || |      |_ \\  | |
      |  _  ||  __/| |_| | _  | || |_   \\__ \\ | |_| || || |___  ___) | |_|
      |_| |_| \\___| \\__, |( ) |_| \\__|  |___/ |____/ |_| \\____||____/  (_)
                    |___/ |/                                              
      `}
    </pre>





      <h1 className="title">About Me</h1>
      <p className="content">
      I’m D1C3 (Dicecipher)—passionate about programming and design. Every project I work on is more than just code or visuals, it’s a piece of me.
      </p>

      <h1 className="title">Languages and Tools</h1>
      
     <div className="chip-container">
     <Chip variant="outlined" className="chips"  label="HTML" avatar={<Avatar src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256" />} />
     
     <Chip variant="outlined" className="chips"  label="CSS" avatar={<Avatar src="https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg" />} />
 
     <Chip variant="outlined" className="chips"  label="Javascript" avatar={<Avatar src="https://skillforge.com/wp-content/uploads/2020/10/javascript.png" />} />

     <Chip variant="outlined" className="chips"  label="ReactJS" avatar={<Avatar src="https://externlabs.com/blogs/wp-content/uploads/2021/10/what-is-react-1024x724.png" />} />

     <Chip variant="outlined" className="chips"  label="VueJS" avatar={<Avatar src="https://avatars.githubusercontent.com/u/16445995?s=200&v=4" />} />

     <Chip variant="outlined" className="chips"  label="NextJS" avatar={<Avatar src="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg" />} />


     <Chip variant="outlined" className="chips"  label="React Native" avatar={<Avatar src="https://devtop.io/wp-content/uploads/2022/10/react-native-1.png" />} />

     
     </div>
     </div>
    </>
    )
  }
  export default Overview;
  