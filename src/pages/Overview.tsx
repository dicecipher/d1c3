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
      <div className='contact-line'></div>
      <h1 className="title">Languages and Tools</h1>
      
     <div className="chip-container">
     <Chip variant="outlined" className="chips"  label="HTML" avatar={<Avatar src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256" />} />
     
     <Chip variant="outlined" className="chips"  label="CSS" avatar={<Avatar src="https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg" />} />
 
     <Chip variant="outlined" className="chips"  label="Javascript" avatar={<Avatar src="https://skillforge.com/wp-content/uploads/2020/10/javascript.png" />} />

     <Chip variant="outlined" className="chips"  label="ReactJS" avatar={<Avatar src="https://externlabs.com/blogs/wp-content/uploads/2021/10/what-is-react-1024x724.png" />} />

     <Chip variant="outlined" className="chips"  label="VueJS" avatar={<Avatar src="https://avatars.githubusercontent.com/u/16445995?s=200&v=4" />} />

     <Chip variant="outlined" className="chips"  label="NextJS" avatar={<Avatar src="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg" />} />

     <Chip variant="outlined" className="chips"  label="WordPress" avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAxIzs2yRTPxONA1yBwMZdhkNwlqmIpxFug&s" />} />
     
     <Chip variant="outlined" className="chips"  label="React Native" avatar={<Avatar src="https://devtop.io/wp-content/uploads/2022/10/react-native-1.png" />} />

     <Chip variant="outlined" className="chips"  label="Tailwind" avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" />} />

     <Chip variant="outlined" className="chips"  label="SCSS" avatar={<Avatar src="https://pluginicons.craft-cdn.com/scssqTY8srJEesn2VFiUV73mUCyRIZsfXfDj2eOY.svg?1528091210" />} /> 
     
     <Chip variant="outlined" className="chips"  label="Bootstrap" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" />} />

     <Chip variant="outlined" className="chips"  label="Firebase" avatar={<Avatar src="https://camo.githubusercontent.com/327f158795aa0c361b2fd793927ede8798fd3c52fe480014e844ee2e8bf7dfbd/68747470733a2f2f66697265626173652e676f6f676c652e636f6d2f646f776e6c6f6164732f6272616e642d67756964656c696e65732f5356472f6c6f676f2d6c6f676f6d61726b2e737667" />} />

     <Chip variant="outlined" className="chips"  label="PHP" avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuua9_FJgkEcyctuCWfVeE_g3pBuRbEcJBng&s" />} />
     </div>

     <div className='contact-line'></div>
     <h1 className="title">Experience</h1>
     


     </div>
    </>
    )
  }
  export default Overview;
  