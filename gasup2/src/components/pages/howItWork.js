import React,{useEffect} from 'react'
import '../../App.css'
import Footer from '../footer';
import './howItWork.css'
import ReactPlayer from "react-player";

function HowItWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <div>
        <div className="container text-center background-height">
          <h1 className="m-4"> How It Works</h1>
          <h4>DOWNLOAD OUR APP, PLACE AN ORDER,</h4>{" "}
          <h4> PIN YOUR LOCATION AND GET</h4>
          <h4> FUEL DELIVERY AT YOUR LOCATION!</h4>
          <div className="column col-5"></div>
          <div className="column col-2"></div>
          <div className="row mar">
            <div className="col-md-6 styled.div position-relative high ">
              {" "}
              <ReactPlayer
                url="https://www.youtube.com/watch?v=NN08VCBm_zc"
                playing
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <div className="col-md-6 styled.div position-relative top">
              <i className="fas fa-download"> Download the app</i>
              <br />
              <i className="fab fa-google-play p-1 "></i>
              <i className="fab fa-app-store p-1"></i>
              <div className="left">
                <i className="fas fa-map-marker p"> Pin Your Location</i>
                <br />
                <i className="fas fa-shopping-cart p "> Enter Quantity</i>
                <br />
                <i className="fas fa-credit-card p ">
                  {" "}
                  Pay and Place your Order
                </i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
}

export default HowItWork
