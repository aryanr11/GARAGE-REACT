import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../Garage Img/logo-light.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {


  return (
    <div>

      {/* <Container fluid className=' ps-sticky pb-sm-2 mb-5 '>
        <Container className=''>
          <Row className='align-items-center'>
            <div className="col-3">
              <Navbar expand="lg" className="">
                <Container>
                  <Navbar.Brand href="/"><img src={logo} className='w-100 img-fluid' alt="" /></Navbar.Brand>
                </Container>
              </Navbar>
            </div>

            <div className='col-9 justify-content-end  p-0 text-white align-items-center '>
              <Navbar expand="lg" className="">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end d-flex'>
                    <Nav className="" activeKey="/home">
                      <Nav.Item>
                        <Nav.Link className='hov fw-bold ps-5 fs-5 home-red' href="/">Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='hov fw-bold text-white ps-5 fs-5' href="/about-us" >About</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='hov fw-bold text-white ps-5 fs-5' href="/all/service" >Service</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='hov fw-bold text-white ps-5 fs-5' href="/technician-login">Technician</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='hov fw-bold text-white ps-5 fs-5' href="/customer-login">Customer</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </Row>
        </Container>
      </Container> */}

      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid  className='ps-sticky p-3 '>
          <Container>
            <Row className=''>
              <div className='col-2'>
                <Navbar.Brand href=""><img src={logo} className='w-100' alt="" /></Navbar.Brand>
              </div>
              <div className='col-10 d-flexx justify-content-end'>
                <Navbar.Toggle aria-controls="basic-navbar-nav " className='' />
                <Navbar.Collapse id="basic-navbar-nav" className='d-end'>
                  <Nav className="">
                    <Nav.Link as={Link} to="/"  className='text-white ps-5 fs-5 hov'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about-us"   className='text-white ps-5 fs-5 hov'>About</Nav.Link>
                    <Nav.Link as={Link} to="/all/service"   className='text-white ps-5 fs-5 hov'>Service</Nav.Link>
                    <Nav.Link as={Link} to="/technician-login"   className='text-white ps-5 fs-5 hov'>Technician</Nav.Link>
                    <Nav.Link as={Link} to="/customer-login"   className='text-white ps-5 fs-5 hov'>Customer</Nav.Link>


                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Row>


          </Container>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header

// {/* icon section */ }
// <div className='col-4 p-0 justify-content-end d-flex'>
//   <Navbar expand="lg" className="justify-content-end ">
//     <Container>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="justify-content-end" activeKey="/home">
//           <Nav.Item>
//             <Nav.Link className='hov ps-4 fs-3' href="/"><FaInstagram /></Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link className='hov ps-4 fs-3' href="" ><FaFacebookF /></Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link className='hov ps-4 fs-3' href="/"><FaTwitter /></Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link className='hov ps-4 fs-3' href="/"><FaGooglePlusG /></Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
// </div>