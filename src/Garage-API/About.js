import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { MdCarCrash } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";

import Slider from "react-slick";

import img1 from "../Garage Img/1.jpg"




const About = () => {

    return (
        <div>


            {/* Main Img */}
            <Container fluid className='mt-4  '>
                <Row>
                    <div className='main-img d-flex align-items-center'>
                        <div className="black-box p-5 ms-4 text-white">
                            <h6 className='fw-bold'>WELCOME TO <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
                            <h1>Care<span className='icon-color'>x</span> Car <br></br> Service & Repair</h1>
                        </div>
                    </div>
                </Row>
            </Container>


            {/* ABout US ✅✅*/}
            <Container fluid className='pt-md-5 pt-4 pb-md-5 pb-3 bg-lite text-white'>
                <Container className=''>
                    {/* <h1 className='icon-color text-center mb-3 d-md-none d-block'>About Us</h1> */}
                    <Row className='align-items-center'>
                        <div className="col-md-6 p-0 ">
                            <img className='img-fluid w-100' src={img1} alt="" />
                        </div>
                        <div className="col-md-6 p-lg-5 p-4">
                            <h6 className=' ps-2 fs-14'>ABOUT US <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
                            <h1 className='fs-40'>Care<span className='icon-color'>x</span> Car <br className='d-lg-block d-none ' /> Service & Repair</h1>
                            <p className='line-word text-color '>Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa ut odio in the miss volume placerat urna, a lacinia eros nunta urna mauris, vehicula rutrum tempus in the interdum felis.</p>
                            <a href="/about-us" className="text-white fw-bold bn-btn">Read More <FaLongArrowAltRight /></a>
                        </div>
                    </Row>
                </Container>
            </Container>

            {/*   HOW WE WORK ✅✅*/}
            <Container fluid className='pt-lg-5 pt-3 pb-lg-5 pb-3 bg-lite'>
                <Container>
                    <Row>
                        <div className='text-white text-center pb-5'>
                            <h6 className='fs-14'>HOW WE WORK</h6>
                            <h1 className='fs-50'>Our Process <PiArrowBendRightDownFill className='fs-1 mt-2 icon-color' /></h1>
                        </div>
                    </Row>
                    <Row className='g'>
                        <div className="col-lg-3 col-md-6  mb-3 col-12">
                            <div className="red-card ">
                                <h1 className='mb-3'><BiSolidCarMechanic /></h1>
                                <h2 className='mb-3 '>Book appointment</h2>
                                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  mb-3 col-12">
                            <div className="box-card">
                                <h1 className='mb-3'><FaCarSide className='icon-color' /></h1>
                                <h2 className='mb-3 '>Bring your Vehicle</h2>
                                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  mb-3 col-12">
                            <div className="box-card">
                                <h1 className='mb-3'><MdCarCrash className='icon-color' /></h1>
                                <h2 className='mb-3 '>Get the Vehicle Repaired</h2>
                                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  mb-3 col-12">
                            <div className="box-card">
                                <h1 className='mb-3'><PiCertificate className='icon-color' /></h1>
                                <h2 className='mb-3 '>Ready for Deliver</h2>
                                <p className=''>Car lorem quisque sodales the varius vestibulum felis.</p>
                            </div>
                        </div>
                        <div className='mt-md-5 mt-3 pt-3 text-center' >
                            <a href="/customer-login" className="text-white fw-bold bn-btn">Book Now <FaLongArrowAltRight /></a>
                        </div>
                    </Row>
                </Container>
            </Container>

          

        </div>
    )
}

export default About