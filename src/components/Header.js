import React from "react"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
    return (
      
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/home" className="text-success">Sean Kempf</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home" className="text-primary">Home</Nav.Link>
        <Nav.Link href="/portfolio" className="text-primary">Portfolio</Nav.Link>
        <Nav.Link href="/contact" className="text-primary">Contact</Nav.Link>
      </Nav> 
      </Navbar>
      
    )
};

export default Header;
