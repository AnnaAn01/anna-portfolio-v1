import "./App.css";
import Sidebar from "./components/Sidebar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
// import MyCv from "./components/pages/MyCv";
// import Blog from "./components/pages/Blog";
import ContactMe from "./components/pages/ContactMe";

function App() {
  return (
    <div>
      <Router basename="/">
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
