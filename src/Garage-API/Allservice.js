import React, { useEffect, useState, Component } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import img from "../Garage Img/main.jpg";
import img4 from "../Garage Img/4.jpg";

import { Card, Col, Container, Row } from "react-bootstrap";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import axios from "axios";

import { FaLongArrowAltRight } from "react-icons/fa";

const Allservice = () => {
  const [service, setService] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getService();
  }, []);

  const getService = () => {
    axios
      .get("https://garage-node-gioc.onrender.com/service/find")
      .then((res) => {
        console.log(res.data.data);
        setService(res.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const card = () => {
    history.push("/customer-login");
  };

  return (
    <div>
      {/* Main Img */}
      <Container fluid className="">
        <Row>
          <div className="main-img d-flex align-items-center">
            <div className="black-box p-5 ms-4 text-white">
              <h6 className="h6">
                BELOW ARE SOME OF{" "}
                <PiArrowBendRightDownFill className="fs-md-3 fs-6 mt-2 ms-1 icon-color" />
              </h6>
              <h1 className="fw-blod mb-3">
                THE MANY AUTO REPAIR SERVICES WE OFFER
              </h1>
              <a href="/customer-login" className="text-white fw-bold bn-btn">
                Book Now
                <FaLongArrowAltRight />
              </a>
            </div>
          </div>
        </Row>
      </Container>

      {/* ABout US */}
      {/* <Container fluid className='ptb bg-lite text-white'>
            <Container className=''>
              <Row className='align-items-center'>
                <div className="col-md-6 p-0 position-relative ">
                  <div className=''>
                    <img className='img-fluid position-relative' src={img1} alt="" />
                  </div>
                </div>
                <div className="col-md-6 ps-md-5 mt-md-0 mt-4">
                  <h6 className=' ps-2 fs-14'>ABOUT US <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
                  <h1 className='fs-40'>Care<span className='icon-color'>x</span> Car <br className='d-md-block d-none ' /> Service & Repair</h1>
                  <p className='line-word text-color'>Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa ut odio in the miss volume placerat urna, a lacinia eros nunta urna mauris, vehicula rutrum tempus in the interdum felis.</p>
                  <div className='mt-4'>
                    <a href="/about-us" className="text-white fw-bold bn-btn">Read More <FaLongArrowAltRight /></a>
                  </div>
                </div>
              </Row>
            </Container>
          </Container> */}

      {/* Serive CARD  WITH Loop DATA MAP */}
      <Container fluid className="pt-md-5 pt-3 pb-md-5 pb-3 text-white bg-lite">
        <Container className="">
          <Row>
            <div className="text-white text-center pb-md-5">
              <h1 className="fs-50">
                Our Services{" "}
                <PiArrowBendRightDownFill className="fs-1 mt-2 icon-color" />
              </h1>
            </div>
          </Row>
          <Row className=" py-lg-5 py-3 g-3">
            {service.map((el, index) => {
              return (
                <div
                  className="col-lg-3 col-sm-6 col-12"
                  key={index}
                  onClick={card}
                >
                  <Card className="p-0 box pos-rel ">
                    <div className="img-box">
                      <Card.Img
                        variant="top"
                        className="p-0"
                        src={
                          "https://garage-node-gioc.onrender.com/images/" +
                          el.image
                        }
                      />
                    </div>
                    <Card.Body>
                      <div className="icon-color">
                        <Card.Title className="pt-1 fw-bold  text-uppercase">
                          {el.serviceName}
                        </Card.Title>
                      </div>
                      {/* <p className='pt-1  mb-2 fs-18 text-color'>{el.decription}</p>
                    <Card.Text className='pt-1'>${el.cost}</Card.Text> */}
                    </Card.Body>
                    <a
                      href="/customer-login"
                      className="text-white hov  fw-bold p-3"
                    >
                      Book Now
                    </a>
                  </Card>
                </div>
              );
            })}
          </Row>
        </Container>
      </Container>

      {/*   HOW WE WORK */}
      {/* <Container fluid className='pt-5 pb-5 bg-lite'>
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
              <div className='mt-5 pt-3 text-center' >
                <a href="/customer-login" className="text-white fw-bold bn-btn">Book Now <FaLongArrowAltRight /></a>
              </div>
            </Row>
          </Container>
        </Container> */}

      {/* What Customers Say */}
      <Container fluid className="pt-5 pb-5 bg-lite text-white">
        <Container className="">
          <Row>
            <div className="text-white text-center pb-3">
              <h1 className="fs-50">
                TESTI<span className="fs-1 mt-2 icon-color"> MON</span> IALS{" "}
                <PiArrowBendRightDownFill className="fs-1 mt-2 icon-color" />{" "}
              </h1>
            </div>
          </Row>
          <Row>
            <div className="col-md-6 position-relative order-1">
              <div className="">
                <img className="w-100 position-relative" src={img4} alt="" />
              </div>
            </div>
            <div className="col-md-6 p-lg-5 order-2 mt-md-0 mt-3">
              <h1 className="fs-40">
                <span className="icon-color"> Terrific</span> auto repair shop!
              </h1>
              <p className="line-word text-color">
                Car repair quisque sodales dui ut varius vestibulum drana tortor
                turpis porttiton tellus eu euismod nisl massa ut odio in the
                miss volume placerat urna, a lacinia eros nunta urna mauris,
                vehicula rutrum tempus in the interdum felis.
              </p>
              <div className="mt-4 ">
                <a href="/" className="text-white fw-bold bn-btn">
                  Read More <FaLongArrowAltRight />
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Allservice;
