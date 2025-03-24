import "./styles/Blogs.scss";
import StarIcon from '@mui/icons-material/Star';
function Blogs() {
    return (
      <><div className="blogs-container">
        <div className="blogs-content">
          <h1 className="blog-title">Color Psychology in UI Design</h1>
          <p className="blog-desc">Color plays a crucial role in UI design, influencing user emotions, behavior, and perceptions of a brand or product. The right color choices can make a design feel professional, playful, or even trustworthy. Understanding color psychology helps designers create experiences that resonate with users and drive engagement.</p>
          <div className="read-button"><button>Read<StarIcon /></button></div>
        </div>
      </div><div className="blogs-container">
          <div className="blogs-content">
            <h1 className="blog-title">Color Psychology in UI Design</h1>
            <p className="blog-desc">Color plays a crucial role in UI design, influencing user emotions, behavior, and perceptions of a brand or product. The right color choices can make a design feel professional, playful, or even trustworthy. Understanding color psychology helps designers create experiences that resonate with users and drive engagement.</p>
            <div className="read-button"><button>Read<StarIcon /></button></div>
          </div>
        </div></>

    )
  }
  
  export default Blogs;
  