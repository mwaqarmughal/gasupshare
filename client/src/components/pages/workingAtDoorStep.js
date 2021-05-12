import React,{useEffect} from 'react'
import '../../App.css'
import Footer from  '../footer'
import './workingAtDoorStep.css'



function WorkingAtDoorStep() {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (
      <div className="">
        <div className="container hei">
            <h1 className='mt-5 text-center text-dark'>Working At Door Step</h1>
            </div>
        <Footer />
      </div>
    );
}

export default WorkingAtDoorStep
