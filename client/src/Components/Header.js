import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import img from '../Images/Purdue.png';

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={img}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} Vaccine Management System
      </Navbar.Brand>
      <Nav variant="pills">
      <Nav.Item>
      <Nav.Link href="/">View Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="register">Register Patient</Nav.Link>
      </Nav.Item>
      </Nav>
    </Container>
    </Navbar>
    <Outlet/>
    </>
  )
}

export default Header