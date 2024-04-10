import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as Yup from "yup";

const Csignup = () => {
  const history = useHistory();

  const Signupschema = Yup.object().shape({
    fname: Yup.string().required("uname require"),
    lname: Yup.string().required("uname require"),
    contact: Yup.string().required("uname require"),
    address: Yup.string().required("uname require"),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <div className="d-flex justify-content-center align-items-center mb-5 mt-120 ms-3 me-3">
      <div className="box-1">
        <h1 className="mb-4 text-white">
          Customer <span className="icon-color">Sign</span>up
        </h1>
        <Formik
          initialValues={{
            fname: "",
            lname: "",
            contact: "",
            address: "",
            email: "",
            password: "",
          }}
          validationSchema={Signupschema}
          onSubmit={async (values) => {
            axios
              .post(
                "https://garage-node-gioc.onrender.com/customer/signup",
                values
              )
              .then((res) => {
                console.log(res.data.data);
                history.push("/customer-login");
              })
              .catch((error) => {
                alert(error.response.data.message);
              });
          }}
        >
          <Form className="d-md-flex flex-column text-center">
            <div className="d-md-flex">
              <div className="p-2">
                <label htmlFor="fname" className="fw-bold">
                  fname :{" "}
                </label>
                <br />
                <Field
                  id="fname"
                  className="in-gov"
                  name="fname"
                  placeholder="fname"
                />
                <span>
                  <ErrorMessage name="fname" />
                  <br />
                  <br />
                </span>

                <label htmlFor="lname" className="fw-bold">
                  lname :
                </label>
                <br />
                <Field
                  id="lname"
                  className="in-gov"
                  name="lname"
                  placeholder="lanem"
                />
                <span>
                  <ErrorMessage name="lname" />
                  <br />
                  <br />
                </span>

                <label htmlFor="contact" className="fw-bold">
                  contact :
                </label>
                <br />
                <Field
                  id="contact"
                  className="in-gov"
                  name="contact"
                  placeholder="contact"
                />
                <span>
                  <ErrorMessage name="contact" />
                  <br />
                  <br />
                </span>
              </div>
              <div className="ps-2 pe-2">
                <label htmlFor="address" className="fw-bold text-start">
                  address :
                </label>
                <br />
                <Field
                  id="address"
                  className="in-gov"
                  name="address"
                  placeholder="address"
                />
                <span>
                  <ErrorMessage name="address" />
                  <br />
                  <br />
                </span>

                <label htmlFor="email" className="fw-bold">
                  Email :
                </label>
                <br />
                <Field
                  className="in-gov"
                  id="email"
                  name="email"
                  placeholder="Email123@email.com"
                  type="email"
                />
                <span>
                  <ErrorMessage name="email" />
                  <br />
                  <br />
                </span>

                <label htmlFor="password" className="fw-bold">
                  password :
                </label>
                <br />
                <Field
                  id="password"
                  className="in-gov"
                  name="password"
                  placeholder="password"
                />
                <span>
                  <ErrorMessage name="password" />
                  <br />
                  <br />
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
            <p className="text-center mt-3">
              <Link to="customer-login" className="text-dark ">
                <span className="icon-color">Already Have An Account.?</span>
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Csignup;
