import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // will create later
import Services from "./pages/Services";

import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Internship from "./pages/Internship";
import FreebieButton from "./components/ui/FreebieButton";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/freebie" element={<FreebieButton />} />
    </Routes>
  );
}

export default App;
