import React, { useEffect} from "react";
import "../../App.css";
import Footer from "../footer";
import './contactUs.css'
function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container text-center background-height">
        <h1 className="m-4 text-center">Contact Us</h1>
        <div className="row lead">
          <div className="col-md-4 col-12 p-2">
            <h3 className="m-4 ">Location</h3>
            <h4 className="m-4 left">Office</h4>
            <ul className="m-4 left list-unstyled ">
              Lahore
              <li>Phone: +923000000000</li>
              <li>Email: GasUpApp2020@gmail.com</li>
            </ul>
            <ul className="m-4 left list-unstyled">
              Islamabad
              <li>Phone: +923000000001</li>
              <li>Email: GasUpApp2020@gmail.com</li>
            </ul>
          </div>
          <div className="col-2"></div>
          <div className="col-md-4 col-12">
            <h3 className="m-4 ">Social Media Contact</h3>
            <ul className="m-4 left ">
              Lahore
              <li className="list-unstyled p-1 ">
                <i className="fab fa-whatsapp" /> +923000000000
              </li>
              <li className="p-1 list-unstyled">
                <i className="fab fa-twitter" /> @gasUpOfficial
              </li>
              <li className="p-1  list-unstyled">
                <i className="fab fa-facebook" /> gasUpOfficial
              </li>
              <li className="p-1  list-unstyled ">
                <i className="fab fa-instagram" /> @gasUpOfficial
              </li>
              <li className="p-1 list-unstyled">
                <i className="fab fa-linkedin" /> @gasUpOfficial
              </li>
              <li className="p-1 list-unstyled">
                <i className="fab fa-youtube" /> @gasUpOfficial
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-center">
          Call us at <br /> Toll free: 111 222 3334 <br />
          or email at GasUpApp2020@gmail.com
        </h3>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
