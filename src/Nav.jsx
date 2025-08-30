import React from "react";
import "./Nav.css"; // Import external CSS

function Nav() {
  return (
    <nav className="nav">
        <h3>Shopify</h3>
      <ul className="nav-list">
        <li><a href="#" className="nav-link">Home</a></li>
        <li><a href="#" className="nav-link">About</a></li>
        <li><a href="#" className="nav-link">Services</a></li>
        <li><a href="#" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
