import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as Yup from "yup";

const Login = () => {
  const history = useHistory();

  const Loginschema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <div className="d-flex justify-content-center align-items-center mt-120 mb-5 ms-3 me-3">
      <div className="box-1">
        <h1 className="mb-4 text-white">
          {" "}
          Technician <span className="icon-color">Login</span> page{" "}
        </h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Loginschema}
          onSubmit={async (values) => {
            axios
              .post(
                "https://garage-node-gioc.onrender.com/technician/login",
                values
              )
              .then((res) => {
                console.log(res.data);
                localStorage.setItem("techniciantoken", res.data.token);
                history.push("/technician");
              })
              .catch((error) => {
                alert(error.response.data.message);
              });
          }}
        >
          <Form className="d-flex flex-column">
            <label htmlFor="email" className="fw-bold">
              Email :
            </label>
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

            <div className="d-flex justify-content-center">
              <button type="submit" className="button">
                Submit
              </button>
            </div>

            <p className="text-center mt-3 bor">
              <Link to="/technician-signup" className="text-white">
                Don't Have An Account ?{" "}
                <span className="icon-color">Please Signup</span>
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
