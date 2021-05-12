import React ,{ useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import Footer from "../footer";
import './partnership.css'
//import validation from './partnershipValidation'

function Partnership() {
useEffect(() => {
  window.scrollTo(0,0)
}, [])  

const [email, setEmail] = useState("");
const [qty, setQty] = useState("");
const [phone, setPhone] = useState("");
const [enquiry, setEnquiry] = useState("");
const history = useHistory()

async function partner(){
  let item={email, qty,phone,enquiry}
  let dotpos = email.lastIndexOf(".");         
  let atpos = email.indexOf("@");
  if (!email) {
    return alert("Email required");
  }
  else if (atpos < 1 || ( dotpos - atpos < 2 )) {
    return alert("Please enter correct email ID")
    }

  if (!qty) {
    return alert("Quantity required");
  }
  if (!phone) {
    return alert("Number is required");
  } else if (phone.length !== 11) {
    return alert("Incomplete phone number");
  }
  if (!enquiry) {
    return alert("Enquiry required");
  } else {
     alert("Request submitted successfully");
  }

  console.warn(item)
  
  let result = await fetch("http://localhost:4000/partnership", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  });
  result = await result.json()
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/how-it-works")
}
  return (
    <div>
      <div className="container text-center background-height">
        <h1 className="m-4 ">
          Exclusive
          <br /> Partnership <br />
          Opportunity
        </h1>
        <div className="column">
          <div className="col-sm-3">
            {/* <button className="btn btn-dark">Download Form Details</button> */}
          </div>
        </div>
        <div className="m-4">
          <div className="row">
            <div className="col-md-6 col-12 p-2">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6 col-12 p-2">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Qty"
                name="qty"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </div>
          </div>
          <div className="m-4"></div>
          <div className="row">
            <div className="col-md-6 col-12 p-2">
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Phone Number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-md-6 col-12 p-2">
              <input
                type="enquiry"
                className="form-control"
                placeholder="Type of Enquiry"
                name="enquiry"
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
              />
            </div>
          </div>
          <div className="text-left p-5">
            <p> Do you own a Fuel Station?</p>

            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  defaultChecked="true"
                />
                Yes
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                />
                No
              </label>
            </div>
          </div>
          <button className="btn btn-dark" type= 'submit' onClick={partner}>
            Submit
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Partnership;
