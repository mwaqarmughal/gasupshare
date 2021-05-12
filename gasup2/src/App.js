import React from 'react'
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/footer';
import HowItWork from './components/pages/howItWork';
import Partnership from './components/pages/partnership';
import Complaints from './components/pages/complaints';
import ContactUs from './components/pages/contactUs';
import ServiceArea from './components/pages/serviceArea';
import SignUp from './components/pages/SignUp';
import WorkAtDoorStep from './components/pages/workingAtDoorStep'
import PreviousExperiences from './components/pages/previousExperiences'
import BestFuelingServices from './components/pages/bestFuelingServices'
import TermsOfServices from "./components/pages/termsOfServices";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/how-it-works" exact component={HowItWork} />
          <Route path="/partnership" exact component={Partnership} />
          <Route path="/complaints" exact component={Complaints} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/service-area" exact component={ServiceArea} />
          <Route path="/signup-signin" exact component={SignUp} />
          <Route path="/work-at-door-step" exact component={WorkAtDoorStep} />
          <Route path="/terms-of-services" exact component={TermsOfServices} />
          <Route
            path="/previous-experiences"
            exact
            component={PreviousExperiences}
          />
          <Route
            path="/best-fueling-services"
            exact
            component={BestFuelingServices}
          />


          <Footer />
        </Switch>
      </Router>
    </>
  );
}

export default App;
