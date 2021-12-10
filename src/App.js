import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
