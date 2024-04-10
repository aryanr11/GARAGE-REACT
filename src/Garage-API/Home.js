import axios from "axios";
import React, { useEffect, useState, Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Slider from "react-slick";

import main from "../Garage Img/main.jpg";
import img1 from "../Garage Img/6.jpg";
import img2 from "../Garage Img/1.jpg";

import { RiServiceFill } from "react-icons/ri";
import { Col, Container, Row } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { MdCarCrash } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";

const Home = () => {
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
    history.push("/all/service");
  };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
              <h1 className="fw-blod mb-2">
                THE MANY AUTO REPAIR SERVICES WE OFFER
              </h1>
            </div>
          </div>
        </Row>
      </Container>

      {/* ABout US  ✅✅*/}
      <Container fluid className="pt-md-5 pt-4 pb-md-5 pb-3 bg-lite text-white">
        <Container className="">
          <Row className="align-items-center">
            <div className="col-md-6 p-0 ">
              <img className="img-fluid w-100" src={img1} alt="" />
            </div>
            <div className="col-md-6 p-lg-5 p-4">
              <h6 className=" ps-2 fs-14">
                ABOUT US{" "}
                <PiArrowBendRightDownFill className="fs-3 mt-2 ms-1 icon-color" />
              </h6>
              <h1 className="fs-40">
                Care<span className="icon-color">x</span> Car{" "}
                <br className="d-lg-block d-none " /> Service & Repair
              </h1>
              <p className="line-word text-color ">
                Car repair quisque sodales dui ut varius vestibulum drana tortor
                turpis porttiton tellus eu euismod nisl massa ut odio in the
                miss volume placerat urna, a lacinia eros nunta urna mauris,
                vehicula rutrum tempus in the interdum felis.
              </p>
              <a href="/about-us" className="text-white fw-bold bn-btn">
                Read More <FaLongArrowAltRight />
              </a>
            </div>
          </Row>
        </Container>
      </Container>

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
                  className="col-lg-3 col-sm-6 col-12 "
                  key={index}
                  onClick={card}
                >
                  <Card className="p-0 box">
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
                    <hr className="icon-color" />
                    <a
                      href="/all/service"
                      className="text-white hov  fw-bold ps-3 pb-2"
                    >
                      More Details..!
                    </a>
                  </Card>
                </div>
              );
            })}
          </Row>
        </Container>
      </Container>

      {/* -  -  -  -  slider   -  -  -    */}
      {/* <Container fluid className='text-white pt-5 pb-5 bg-lite'>
        <Container className="">
          <Row className=" py-5 gap-4">
            <div className="slider-container">
              <Slider {...settings}>
                {
                  service.map((el, index) => {
                    return <div className='col-4'>

                      <Card style={{ width: '363px' }} key={index} onClick={card} className='p-0 box pos-rel '>
                        <div className="img-box border-bottom"><Card.Img variant="top" className='p-0' src={'https://garage-node-gioc.onrender.com/images/' + el.image} /></div>
                        <Card.Body>
                          <div className='icon-color'><Card.Title className='pt-1 mb-2 fw-bold  text-uppercase' >{el.serviceName}</Card.Title></div>
                          <p className='pt-1  mb-2 fs-18 text-color'>{el.decription}</p>
                          <Card.Text className='pt-1 '>${el.cost}</Card.Text>
                        </Card.Body>
                        <a href="/" className="text-white hov  fw-bold p-3">More Details..!</a>
                      </Card>
                    </div>
                  })
                }
              </Slider>
            </div>
          </Row>
        </Container>
      </Container> */}

      {/*   Our Process ✅✅*/}
      <Container fluid className="pt-lg-5 pt-3 pb-lg-5 pb-3 bg-lite">
        <Container>
          <Row>
            <div className="text-white text-center pb-5">
              <h6 className="fs-14">HOW WE WORK</h6>
              <h1 className="fs-50">
                Our Process{" "}
                <PiArrowBendRightDownFill className="fs-1 mt-2 icon-color" />
              </h1>
            </div>
          </Row>
          <Row className="g">
            <div className="col-lg-3 col-md-6  mb-3 col-12">
              <div className="red-card ">
                <h1 className="mb-3">
                  <BiSolidCarMechanic />
                </h1>
                <h2 className="mb-3 ">Book appointment</h2>
                <p className="">
                  Car lorem quisque sodales the varius vestibulum felis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  mb-3 col-12">
              <div className="box-card">
                <h1 className="mb-3">
                  <FaCarSide className="icon-color" />
                </h1>
                <h2 className="mb-3 ">Bring your Vehicle</h2>
                <p className="">
                  Car lorem quisque sodales the varius vestibulum felis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  mb-3 col-12">
              <div className="box-card">
                <h1 className="mb-3">
                  <MdCarCrash className="icon-color" />
                </h1>
                <h2 className="mb-3 ">Get the Vehicle Repaired</h2>
                <p className="">
                  Car lorem quisque sodales the varius vestibulum felis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  mb-3 col-12">
              <div className="box-card">
                <h1 className="mb-3">
                  <PiCertificate className="icon-color" />
                </h1>
                <h2 className="mb-3 ">Ready for Deliver</h2>
                <p className="">
                  Car lorem quisque sodales the varius vestibulum felis.
                </p>
              </div>
            </div>
            <div className="mt-md-5 mt-3 pt-3 text-center">
              <a href="/customer-login" className="text-white fw-bold bn-btn">
                Book Now <FaLongArrowAltRight />
              </a>
            </div>
          </Row>
        </Container>
      </Container>

      {/* What Customers Say ✅✅*/}
      <Container fluid className="pt-5 pb-lg-5 pb-3 bg-lite text-white">
        <Container className="">
          <Row>
            <div className="text-white text-center pb-md-5 pb-3">
              <h6 className="fs-14">TESTIMONIALS </h6>
              <h1 className="fs-50">
                What<span className="icon-color"> Customers</span> Say{" "}
                <PiArrowBendRightDownFill className="fs-1 mt-2 icon-color" />{" "}
              </h1>
            </div>
          </Row>
          <Row className="align-items-center">
            <div className="col-md-6 position-relative">
              <img className="img-fluid w-100" src={img2} alt="" />
            </div>
            <div className="col-md-6 p-lg-5 p-4">
              {/* <h6 className=' ps-2 fs-14'>TESTIMONIALS <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6> */}
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
              <div className="d-flex mt-4 align-items-center text-sm-center ">
                <img
                  width="15%"
                  className="rounded-circle "
                  src={img1}
                  alt=""
                />
                <div className="ms-3">
                  <h6 className="mb-0 mt-3 icon-color">Customer Name</h6>
                  <p className="text-color">Customer</p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </Container>

      {/* Appointment */}
      {/* <Container fluid className='mt-5  '>
        <Row>
          <div className='p-0'>
            <img height="" className='w-100 p-0 ' src="https://assets.architecturaldigest.in/photos/600825b81363405bf8eb5086/16:9/w_2560%2Cc_limit/Garage-Rend_03_A-1366x768.jpg" alt="" />
          </div>
          <div className='pos-ab'>
            <div className="black-box p-5 ms-4 text-white">
              <h6 className='fw-bold'>WHAT WE DO <PiArrowBendRightDownFill className='fs-3 mt-2 ms-1 icon-color' /></h6>
              <h1>Our Services</h1>
              <div className='mt-4'>
                <a href="/" className="text-white fw-bold bn-btn">Book Now <FaLongArrowAltRight /></a>
              </div>
            </div>
          </div>
        </Row>
      </Container> */}
    </div>
  );
};

export default Home;

{
  /* <div className='container-fluid bg-lite text-dark'>
        <div className="container">
          <div className="row d-flex py-5">
            {
              service.map((el, index) => {
                return <div className="col-4 box p-0 bg-white m-3 bor" key={index} onClick={card}>

                  <div className=" text-dark pos-rel">
                    <div className="card-icon rounded-circle"><RiServiceFill className='icon-color fs-2' /></div>
                    <div className="img-box"><img className='w-100' src={'https://garage-node-gioc.onrender.com/images/' + el.image} alt="" /></div>
                    <div className='p-3'>
                      <h4 className='pt-1 fs-6 mb-0 fw-bold icon-color' >{el.serviceName}</h4>
                      <p className='pt-1  mb-0 fs-18'>{el.decription}</p>
                      <h6 className='pt-1 f-color'>${el.cost}</h6>
                      <div>
                        <a href="/" className="text-dark hov details fw-bold">More Details..!</a>
                      </div>
                    </div>
                  </div>

                </div>

              })
            }
          </div>
        </div>
</div> */
}
