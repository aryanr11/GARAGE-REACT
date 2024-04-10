import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";

import img3 from "../../Garage Img/3.jpg";

const Technician = () => {
  const [appoinment, setAppoinment] = useState([]);

  const history = useHistory();

  const getAppointment = () => {
    axios
      .get("https://garage-node-gioc.onrender.com/appointment/find")
      .then((res) => {
        console.log(res.data.data);
        setAppoinment(res.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  useEffect(() => {
    getAppointment();
  }, []);

  const card = () => {
    history.push("/invoice");
  };

  return (
    <div>
      <Container
        fluid
        className=" pt-lg-5 pt-3 pb-lg-5mt-5 p-0 bg-lite text-white"
      >
        <Container className="">
          <Row className=" align-items-center">
            <div className="col-md-6 order-2 p-lg-5 p-3">
              <h1 className="mb-4">Technicaian</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <Link to="/service" className="service fw-bold">
                Add service..!
              </Link>
            </div>
            <div className="col-md-6 p-0 order-1">
              <img width="100%" src={img3} alt="" />
            </div>
          </Row>
        </Container>
      </Container>

      {/* <div className='container-fluid bg-lite text-dark'>
        <div className="container">
          <div className="row d-flex py-5">
            {
              appoinment.map((el, index) => {
                return <div className="col-4 p-0 red-card  m-3 bor" key={index} onClick={card}>

                  <div className="box  pos-rel">
                    <div className='p-3'>
                      <h2 className='text-center'>----- Technician -----</h2>
                      <h4 className='pt-1 mb-0 fw-bold' >{el.appointmentDate}</h4>
                      <p className='pt-1  mb-0 fs-18'>{el.notes}</p>
                      <div className='mt-2'>
                        <a href="" className="text-white fw-bold ">More Details..!</a>
                      </div>
                    </div>
                  </div>

                </div>
              })
            }
          </div>
        </div>
      </div> */}

      <Container fluid className="pb-5 pt-5 ps-0 pe-0 bg-lite">
        <Container>
          <Row className="g-3">
            {appoinment.map((el, index) => {
              return (
                <div
                  className="col-md-3 col-sm-6 col-12"
                  key={index}
                  onClick={card}
                >
                  <Card style={{ width: "" }} className=" box-card text-center">
                    <Card.Body>
                      <Card.Title className="home-red">
                        ----- Technician -----
                      </Card.Title>
                      <Card.Text className="mb-0 fs-3">
                        {el.appointmentDate}
                      </Card.Text>
                      <Card.Text>{el.notes}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Technician;
