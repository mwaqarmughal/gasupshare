import React ,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
// import GetUser from "../../getUsers";
import Footer from "../footer";
import './complaints.css'


function Complaints() {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const [email, setEmail] = useState("");
const [complaints, setComplaints] = useState("");
const history = useHistory();

async function Comp() {
  let item = { email, complaints };
  let dotpos = email.lastIndexOf(".");
  let atpos = email.indexOf("@");
  if (!email) {
    return alert("Email required");
  } else if (atpos < 1 || dotpos - atpos < 2) {
    return alert("Please enter correct email ID");
  }

  if (!complaints) {
    return alert("Please enter your suggestion or complaint");
  }
  else if(complaints.length<20 ){
    alert('Complaint or suggestion must be of more than 20 characters.')
  }
   else {
    alert("Request submitted successfully");
  }
  console.warn(item);
  let result = await fetch("http://localhost:4000/complaints", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  result = await result.json();
  localStorage.setItem("user-info", JSON.stringify(result));

  history.goBack('/complaints')
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

  
  return (
    <div>
      <div className="container text-center background-height">
        <h1 className="m-4 down"> COMPLAINTS</h1>

        <div className="m-4">
          <div className="row m-3">
            <div className="col-12 p-2 col-md-10">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>
          <div className="form-group text-left m-4">
            <label for="comment">Comment:</label>

            <textarea
              className="form-control col-md-10 col-12"
              rows="7"
              id="comment"
              name="comment"
              onChange={(e) => setComplaints(e.target.value)}
              value={complaints}
            ></textarea>
          </div>
        </div>
        <button className="btn btn-dark" onClick={Comp}>
          Submit
        </button>
      </div>
      <div className='container pl-lg-5'>
      {/* <GetUser /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Complaints