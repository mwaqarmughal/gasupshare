import React,{useEffect} from 'react'
import '../../App.css'
import Footer from  '../footer'
import "./termsOfServices.css";



function TermsOfServices() {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (
      <div className="">
        <div className="container hei">
          <h1 className="mt-5 text-center text-dark">Terms Of Services</h1>
        </div>
        <Footer />
      </div>
    );
}

export default TermsOfServices
