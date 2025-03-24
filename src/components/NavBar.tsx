import './styles/NavBar.scss';
import { useState } from "react";
import Overview from "../pages/Overview"; 
import Projects from "../pages/Projects";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";

function NavBar() {
  const [active, setActive] = useState("overview");

  const items = [
    { name: "Overview", color: "#d76a50" },
    { name: "Projects", color: "#2e2f49" },
    { name: "Blogs", color: "#7fae9d" },
    { name: "Contact", color: "#f2cb8c" },
  ];
  const renderPage = () => {
    switch (active) {
      case "Overview":
        return <Overview />;
      case "Projects":
        return <Projects />;
      case "Blogs":
        return <Blogs />;
      case "Contact":
        return <Contact />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      <div className="navbar-container">
        <div className="hello-container">
          <span className="h">h</span>
          <span className="e">e</span>
          <span className="l">lllllll</span>
          <span className="o">o</span>
          <span className="exclamation">!</span>
        </div>

        <nav className="navbar">
          <ul>
            {items.map(({ name, color }) => (
              <li
                key={name}
                className={active === name ? "active" : ""}
                onClick={() => setActive(name)}
                style={
                  {
                    "--underline-color": color,
                  } as React.CSSProperties
                }
              >
                <span className="box" style={{ backgroundColor: color }}></span>{" "}
                {name}
              </li>
            ))}
          </ul>
        </nav>

        <div className="line"></div>

        <div className="content">{renderPage()}</div>
      </div>
    </>
  );
}

export default NavBar;
