import React,{useEffect} from 'react'
import '../../App.css'
import Footer from  '../footer'
import './previousExperiences.css'



function PreviousExperiences() {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (
      <div className="">
        <div className="container hei">
            <h1 className='mt-5 text-center text-dark'>Previous Experiences</h1>
            </div>
        <Footer />
      </div>
    );
}

export default PreviousExperiences
