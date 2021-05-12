import React,{useEffect} from 'react';
import '../../App.css';
import Footer from '../footer';


function Home(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <>
        <div className="container ">
          <div className="container p-5 m-4">
            <h1 className="container-fluid text-center m-4 bgi ">
              WELCOME TO GASUP
            </h1>
            <h3 className="container-fluid text-center p-4">ON DEMAND FUEL</h3>
            <h3 className="container-fluid text-center">DELIVERY SERVICES</h3>
            <h3 className="container-fluid text-center">24/7</h3>
            <h3 className="container-fluid text-center">
              CARS/TRUCKS/GENERATORS/FLEETS/CONSIRCTIMS
            </h3>
            <h1 className="mt-5 text-white">a </h1>
          </div>
        </div>
        <Footer />
      </>
    );
}
export default Home; 