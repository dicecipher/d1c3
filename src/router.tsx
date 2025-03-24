import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Contact from "./pages/Blogs";
import FAQs from "./pages/Contact";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<FAQs />} />
    </Routes>
  );
}

export default Router;
