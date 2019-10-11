import React from "react";
import Logo from "../images/logo.svg";
import Avatar from "../images/avatar.svg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className="nav-bar">
        <Navbar.Brand href="/">
          <img alt="site logo" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/app/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#">Buy insurance</Nav.Link>
            <Nav.Link href="/app/account_setting">Account settings</Nav.Link>
          </Nav>
          <img alt="profile avatar" src={Avatar} />
          <Nav>
            <NavDropdown title="Luis Durello" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Account</NavDropdown.Item>
              <NavDropdown.Item href="#">Log out</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Invite link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
