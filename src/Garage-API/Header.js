import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleShowSidebar = () => setShowSidebar(true);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);

  const down = () => {
    const section = document.getElementById('alldown');
    const sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className={`ps-sticky p-3 ${scrolled ? 'shadow-1' : ""}`}>
          <Container>
            <Row className=''>
              <div className='col-2'>
                <Navbar.Brand href=""><span className='icon-color fs-3 fs-md-2 fw-bolder'>AUTO<span className='text-white fs-p1 fw-normal'>LOGIC</span></span></Navbar.Brand>
              </div>
              <div className='col-10 d-flex justify-content-end'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='' onClick={handleShowSidebar} />
                <Navbar.Collapse id="basic-navbar-nav" className='d-none justify-content-end'>
                  <Nav className="">
                    <Nav.Link as={Link} to="/" className='text-white ps-5 fs-5 hov'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about-us" className='text-white ps-5 fs-5 hov'>About</Nav.Link>
                    <Nav.Link as={Link} to="/allservice" className='text-white ps-5 fs-5 hov'>Service</Nav.Link>
                    <Nav.Link as={Link} to="/technician-login" className='text-white ps-5 fs-5 hov'>Technician</Nav.Link>
                    <Nav.Link as={Link} to="/customer-login" className='text-white ps-5 fs-5 hov'>Customer</Nav.Link>
                    <Nav.Link id="scrollBtn" onClick={down} className='text-white ps-5 fs-5 hov'>Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Row>
          </Container>
        </Container>
      </Navbar>

      <Offcanvas className="sidebar-de" show={showSidebar} onHide={handleCloseSidebar}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><span className='icon-color fs-3 fs-md-2 fw-bolder'>AUTO<span className='text-white fs-p1 fw-normal'>LOGIC</span></span></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="">
            <ul className='m-0 p-0'>
              <li>
                <Nav.Link as={Link} className='text-white ps-5 fs-5 hov' to="/" onClick={handleCloseSidebar}>Home</Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} className='text-white ps-5 fs-5 hov' to="/about-us" onClick={handleCloseSidebar}>About</Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} className='text-white ps-5 fs-5 hov' to="/allservice" onClick={handleCloseSidebar}>Service</Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} className='text-white ps-5 fs-5 hov' to="/technician-login" onClick={handleCloseSidebar}>Technician</Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} className='text-white ps-5 fs-5 hov' to="/customer-login" onClick={handleCloseSidebar}>Customer</Nav.Link>
              </li>
              <li>
                <Nav.Link id="scrollBtn" className='text-white ps-5 fs-5 hov' onClick={down}>Contact</Nav.Link>
              </li>
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Header;