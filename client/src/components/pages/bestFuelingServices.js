import React,{useEffect} from 'react'
import '../../App.css'
import Footer from  '../footer'
import "./bestFuelingServices.css";



function BestFuelingServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="container hei">
        <h1 className="mt-5 text-center text-dark">Best Fueling Services</h1>
      </div>
      <Footer />
    </div>
  );
}

export default BestFuelingServices;
