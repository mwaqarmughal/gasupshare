import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import '../../App.css'
import Footer from '../footer'
import './signup.css'
// import validation from './signupValidation'


function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const [username, setUsername] = useState("")
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const history = useHistory()

async function SignUp(){
  let item={username,password,email}
  let dotpos = email.lastIndexOf(".");
  let atpos = email.indexOf("@");
  
  if (!username) {
    return alert("Username required");
  }
  if(!email){
    return alert('Email required')
  }
  else if (atpos < 1 || dotpos - atpos < 2) {
    return alert("Please enter correct email ID");
  }
  if(!password){
    return alert('Password required')}
    else  if (password.length<8){
      return alert('Password must be more than 8 characters')
    }
    if(!confirmPassword){
    alert('Password does not match')
  }
  else if (confirmPassword!== password){
    return alert("Password must be more than 8 characters");
  }
  else {alert('Request submitted successfully')}
  console.warn(item)
  let result = await fetch("http://localhost:4000/users", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  });
  result = await result.json()
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/")
}
    return (
      <div>
        <div className="container bd-height">
          <h1 className="text-center text-dark m-4 ">Register</h1>
          <div className="row">
            <div className="col-md-3 col-xs-12"></div>
            <div className="form down col-md-6 col-xs-12">
              <div className="form-group">
                <label for="username">Username</label>
                <input
                  type="text" 
                  name="username"
                  id="username"
                  className="form-control"
                  placeholder="Enter the user name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <small id="username" className="text-muted">
                  Enter the unique username
                </small>
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small id="emailHelpId" className="form-text text-muted">
                  Enter the unregistered email address.
                </small>
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Enter the password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={SignUp}
              >
                Register
              </button>
            </div>
            <div className="col-md-3 col-xs-12"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default SignUp
