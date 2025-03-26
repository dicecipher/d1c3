import './styles/Projects.scss';
import Chip from '@mui/material/Chip';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import Tooltip from '@mui/material/Tooltip';
function Projects() {
    return (
      <div>
        <div className='projects-container'>
          <div className='projects-content'>
            <h1 className='project-name'>Tamix<span className='year'>(2023)</span></h1>
            <Chip className="tools"  label="WordPress"/>
            <Tooltip title="Open Link" arrow>
          <a className="circle-icon" href="https://tamix.com/" target="_blank" rel="noopener noreferrer">
            <CallMadeOutlinedIcon className="icon" />
          </a>
        </Tooltip>
          </div>
          <div className='bottom-bar'></div>
        </div>
        <div className='projects-container'>
        <div className='projects-content'>
          <h1 className='project-name'>Tamix<span className='year'>(2023)</span></h1>
          <Chip className="tools"  label="WordPress"/>
          <Chip className="tools"  label="WordPress"/>
          <Tooltip title="Open Link" arrow>
          <a className="circle-icon" href="https://tamix.com/" target="_blank" rel="noopener noreferrer">
            <CallMadeOutlinedIcon className="icon" />
          </a>
        </Tooltip>
        </div>
        <div className='bottom-bar'></div>
      </div>
      </div>
    )
  }
  
  export default Projects;
  