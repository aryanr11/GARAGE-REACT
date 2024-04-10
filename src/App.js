
//  - - - - - - - - - - - - - - - - - - - - - -   Garage API CRUD IN REACT


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "~slick-carousel/slick/slick.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './Garage-API/Technician/Signup';
import Header from './Garage-API/Header';

import Vehical from './Garage-API/Vehical';
import Login from './Garage-API/Technician/Login';
import Home from './Garage-API/Home';
import Csignup from './Garage-API/Customer/Csignup';
import Clogin from './Garage-API/Customer/Clogin';
import Appointment from './Garage-API/Appointment';
import Technician from './Garage-API/Technician/Technician';
import Service from './Garage-API/Technician/Service';
import Invoice from './Garage-API/Invoice';
import Cprotect from './Garage-API/protector/Cprotect';
import Footer from './Garage-API/Footer';
import About from './Garage-API/About';
import Tprotect from './Garage-API/protector/Tprotect';
import Protect from './Garage-API/protector/Protect';
import Contact from './Garage-API/Contact';
import Allservice from './Garage-API/Allservice';

function App() {

  return (
    <div className="App">
      <Router>

        <Switch>

          {/* home page */}
          <Route exact path="/">
            <Header />
              <Home></Home>
            <Footer />
          </Route>


          {/* technician page */}
          <Route path="/technician">
            <Header />
              <Technician></Technician>
            <Footer />
          </Route>

          <Route path="/technician-signup">
            <Header />
              <Signup></Signup>
            <Footer />
          </Route>

          <Route path="/technician-login">
            <Header />
              <Login></Login>
            <Footer />
          </Route>

          {/* serivce page */}
          <Route path="/service">
            <Tprotect>
              <Header />
                <Service></Service>
              <Footer />
            </Tprotect>
          </Route>

          <Route path="/all/service">
            <Header />
              <Allservice></Allservice>
            <Footer />
          </Route>


          {/* customer page*/}
          <Route path="/customer-signup">
            <Header />
              <Csignup></Csignup>
            <Footer />
          </Route>

          <Route path="/customer-login">
            <Header />
              <Clogin></Clogin>
            <Footer />
          </Route>


          {/* vehical page */}
          <Route path="/vehical">
            <Cprotect>
              <Header />
              <Vehical></Vehical>
              <Footer />
            </Cprotect>
          </Route>


          {/* appoinment page */}
          <Route path="/appoinment">
            <Header />
              <Appointment></Appointment>
            <Footer />

          </Route>

          {/* invoice page */}
          <Route path="/invoice">
            <Header />
              <Invoice></Invoice>
            <Footer />
          </Route>

          <Route path="/about-us">
            <Header />
              <About></About>
            <Footer />
          </Route>

          {/* <Route path="/contact">
            <Contact></Contact>
          </Route> */}

        </Switch>

      </Router>
    </div >
  );

}
export default App;


// Tech login  ->  technicain page -> add Service -> service -> Home add card click -> customer login -> vehical -> appointment -> home

//  Appointment -> technicain page  card appointment no -> appoinment card click -> invoice -> home. 


// https://ld-wp73.template-help.com/wordpress/prod_11656/v4/car-repair/#