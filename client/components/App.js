import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="nav">{/* put links in nav bar */}</nav>
      </div>
    </Router>
  );
};

export default App;
