import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar/index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* <Route exact path="/" component={About} /> */}
        {/* <Route exact path="/portfolio" component={Portfolio} /> */}
        {/* <Route exact path="/contact" component={Contact} /> */}
        {/* <Route path="/resume" component={Resume} /> */}
      </div>
    </Router>
  )
    
}

export default App;
