import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import imglogo from '../Garage Img/logo-light.png'

const Footer = () => {
    return (
        <div>

            <Container fluid className='bg-lite text-white py-5  '>
                <Container>
                    <Row>
                        <div className="col-md-4 mt-3 text-center">
                            <a href="/" ><img className='w-md-75 w-50 mb-4' src={imglogo} alt="" /></a>
                            <p className='line-word text-color'>Carex imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen.</p>
                                <ul className='d-flex mb-0 ps-0 justify-content-center'>
                                    <li className=' list-unstyled fw-bold'><Link to="/" className=" fs-md-2 fs-6 hov text-white"><FaInstagram /></Link></li>
                                    <li className='ps-4 list-unstyled fw-bold'><Link to="/" className=" fs-md-2 fs-6 hov text-white"><FaFacebookF /></Link></li>
                                    <li className='ps-4 list-unstyled fw-bold'><Link to="/" className=" fs-md-2 fs-6 hov text-white"><FaTwitter /></Link></li>
                                    <li className='ps-4 list-unstyled fw-bold'><Link to="/" className=" fs-md-2 fs-6 hov text-white"><FaGooglePlusG /></Link></li>
                                </ul>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center mt-md-0 mt-5 ">
                            <ul className=' mb-0 ps-0 '>
                                <h3 className='mb-3 fw-blod fs-1'>Quick Links</h3>
                                <li className='pb-2 ms-md-0 ms-4'><Link to="/" className="hov text-color"><span className='icon-color me-2 fs-4'><IoMdCheckmarkCircleOutline /></span> About</Link></li>
                                <li className='pb-2 ms-md-0 ms-4'><Link to="/" className="hov text-color"><span className='icon-color me-2 fs-4'><IoMdCheckmarkCircleOutline /></span> Services</Link></li>
                                <li className='pb-2 ms-md-0 ms-4'><Link to="/" className="hov text-color"><span className='icon-color me-2 fs-4'><IoMdCheckmarkCircleOutline /></span> Pricing</Link></li>
                                <li className='pb-2 ms-md-0 ms-4'><Link to="/" className="hov text-color"><span className='icon-color me-2 fs-4'><IoMdCheckmarkCircleOutline /></span> Team</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-md-left text-center mt-md-0 mt-5 ">
                            <h3 className='mb-3 fw-blod fs-1'>Subscribe</h3>
                            <p className='line-word text-color'>Want to be notified about our services. Just sign up and we'll send you a notification by email.</p>
                            {/* <div className=''>
                                <form action="">
                                    <input type="email"  placeholder='Enter Your Email'/>
                                    <button type='submit'>Send</button>
                                </form>
                            </div> */}
                        </div>
                    </Row>
                    {/* <Row>
                    <div className="text-center pt-5">
                            <h3 className='mb-4 fw-blod fs-1'>Subscribe</h3>
                            <p className='line-word text-color'>Want to be notified about our services. Just sign up and we'll send you a notification by email.</p>
                        </div>
                    </Row> */}
                </Container>
            </Container>
        </div>
    )
}

export default Footer